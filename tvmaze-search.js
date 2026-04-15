/**
 * TVMaze API Search Integration - Enhanced with Diverse Results
 * Enables live search using the TVMaze API (https://api.tvmaze.com/)
 * Returns diverse, related results including:
 * - Direct matches
 * - Fuzzy matches (partial, typos)
 * - Shows from same genres
 * - Popular/trending shows when query is vague
 */

const TVMAZE_API_URL = 'https://api.tvmaze.com';

// Cache for search results to avoid repeated API calls
const searchCache = new Map();

// Popular/trending shows for fallback suggestions
const POPULAR_SHOWS = [
    "Breaking Bad", "Game of Thrones", "Stranger Things", "The Office",
    "Friends", "The Mandalorian", "The Witcher", "Wednesday",
    "Squid Game", "Money Heist", "Dark", "Black Mirror",
    "The Crown", "Ozark", "Narcos", "Peaky Blinders"
];

/**
 * Calculate string similarity (Levenshtein distance based)
 * @param {string} str1 - First string
 * @param {string} str2 - Second string
 * @returns {number} - Similarity score (0-1)
 */
function stringSimilarity(str1, str2) {
    const len1 = str1.length;
    const len2 = str2.length;
    const matrix = [];

    for (let i = 0; i <= len1; i++) {
        matrix[i] = [i];
    }
    for (let j = 0; j <= len2; j++) {
        matrix[0][j] = j;
    }

    for (let i = 1; i <= len1; i++) {
        for (let j = 1; j <= len2; j++) {
            const cost = str1[i - 1] === str2[j - 1] ? 0 : 1;
            matrix[i][j] = Math.min(
                matrix[i - 1][j] + 1,
                matrix[i][j - 1] + 1,
                matrix[i - 1][j - 1] + cost
            );
        }
    }

    const distance = matrix[len1][len2];
    const maxLen = Math.max(len1, len2);
    return maxLen === 0 ? 1 : (maxLen - distance) / maxLen;
}

/**
 * Check if two strings have partial match
 * @param {string} str1 - First string
 * @param {string} str2 - Second string
 * @returns {boolean} - True if partial match exists
 */
function hasPartialMatch(str1, str2) {
    const words1 = str1.toLowerCase().split(/\s+/);
    const words2 = str2.toLowerCase().split(/\s+/);

    return words1.some(w1 =>
        words2.some(w2 =>
            w1.includes(w2) || w2.includes(w1) || stringSimilarity(w1, w2) > 0.7
        )
    );
}

/**
 * Search for shows using TVMaze API with diverse results
 * @param {string} query - Search query
 * @param {Array} localMovies - Local movies array
 * @param {number} limit - Maximum number of results (default: 8)
 * @returns {Promise<Array>} - Array of diverse show results
 */
async function searchTVMaze(query, localMovies = [], limit = 8) {
    if (!query || query.length < 2) {
        return [];
    }

    // Check cache first
    const cacheKey = `diverse_${query}_${limit}`;
    if (searchCache.has(cacheKey)) {
        return searchCache.get(cacheKey);
    }

    try {
        const results = new Map(); // Use Map to prevent duplicates

        // 1. Direct search
        const directResponse = await fetch(
            `${TVMAZE_API_URL}/search/shows?q=${encodeURIComponent(query)}`
        );

        if (directResponse.ok) {
            const directData = await directResponse.json();
            directData.slice(0, 4).forEach(item => {
                const show = transformTVMazeResult(item.show);
                results.set(show.tvmazeId, { ...show, matchType: 'direct' });
            });
        }

        // 2. If we have few results, try to get more from genres
        if (results.size < limit) {
            const genreResults = await searchByGenre(query, localMovies, limit - results.size);
            genreResults.forEach(show => {
                if (!results.has(show.tvmazeId)) {
                    results.set(show.tvmazeId, { ...show, matchType: 'genre' });
                }
            });
        }

        // 3. If still few results, add fuzzy matches
        if (results.size < limit) {
            const fuzzyResponse = await fetch(
                `${TVMAZE_API_URL}/search/shows?q=${encodeURIComponent(query)}`
            );

            if (fuzzyResponse.ok) {
                const fuzzyData = await fuzzyResponse.json();
                const queryWords = query.toLowerCase().split(/\s+/);

                fuzzyData.forEach(item => {
                    const show = item.show;
                    const titleMatch = hasPartialMatch(query, show.name);

                    if (titleMatch && !results.has(show.id)) {
                        const transformed = transformTVMazeResult(show);
                        results.set(show.id, { ...transformed, matchType: 'fuzzy' });
                    }
                });
            }
        }

        // 4. If query is very short or vague, add popular shows
        if (results.size < 3 && query.length <= 3) {
            const popularShows = await getPopularShows(limit - results.size);
            popularShows.forEach(show => {
                if (!results.has(show.tvmazeId)) {
                    results.set(show.tvmazeId, { ...show, matchType: 'popular' });
                }
            });
        }

        // Convert to array and limit
        const finalResults = Array.from(results.values()).slice(0, limit);

        // Cache the results
        searchCache.set(cacheKey, finalResults);

        return finalResults;
    } catch (error) {
        console.error('Error searching TVMaze:', error);
        return [];
    }
}

/**
 * Search by matching genres
 */
async function searchByGenre(query, localMovies, limit) {
    try {
        // Extract potential genre from query
        const genres = extractGenres(query);

        if (genres.length === 0) {
            return [];
        }

        const results = [];
        for (const genre of genres.slice(0, 2)) {
            const response = await fetch(
                `${TVMAZE_API_URL}/search/shows?q=${encodeURIComponent(genre)}`
            );

            if (response.ok) {
                const data = await response.json();
                const genreShows = data
                    .filter(item => {
                        const show = item.show;
                        return show.genres && show.genres.some(g =>
                            g.toLowerCase().includes(genre.toLowerCase())
                        );
                    })
                    .slice(0, Math.ceil(limit / 2))
                    .map(item => ({
                        ...transformTVMazeResult(item.show),
                        matchType: 'genre'
                    }));

                results.push(...genreShows);
            }
        }

        return results.slice(0, limit);
    } catch (error) {
        console.error('Error searching by genre:', error);
        return [];
    }
}

/**
 * Extract potential genres from query
 */
function extractGenres(query) {
    const queryLower = query.toLowerCase();
    const knownGenres = [
        'drama', 'comedy', 'action', 'thriller', 'horror', 'sci-fi',
        'fantasy', 'romance', 'mystery', 'crime', 'adventure', 'animation',
        'documentary', 'war', 'western', 'musical', 'anime', 'kdrama'
    ];

    return knownGenres.filter(genre =>
        queryLower.includes(genre) || stringSimilarity(queryLower, genre) > 0.7
    );
}

/**
 * Get popular shows as fallback
 */
async function getPopularShows(limit) {
    try {
        const results = [];

        for (const showName of POPULAR_SHOWS.slice(0, limit)) {
            const response = await fetch(
                `${TVMAZE_API_URL}/search/shows?q=${encodeURIComponent(showName)}`
            );

            if (response.ok) {
                const data = await response.json();
                if (data.length > 0) {
                    results.push({
                        ...transformTVMazeResult(data[0].show),
                        matchType: 'popular'
                    });
                }
            }
        }

        return results;
    } catch (error) {
        console.error('Error fetching popular shows:', error);
        return [];
    }
}

/**
 * Transform TVMaze result to our format
 */
function transformTVMazeResult(show) {
    return {
        id: show.id,
        title: show.name,
        year: show.premiered ? parseInt(show.premiered.split('-')[0]) : 'N/A',
        image: show.image ? show.image.medium : null,
        category: show.type === 'Scripted' ? 'TV Series' : show.type,
        director: show.network ? show.network.name : 'Unknown',
        description: show.summary ? stripHtml(show.summary) : 'No description available',
        themes: show.genres ? show.genres.join(', ') : 'N/A',
        rating: show.rating ? show.rating.average : 0,
        isFromTVMaze: true,
        tvmazeId: show.id,
        url: show.url
    };
}

/**
 * Get detailed information about a specific show from TVMaze
 * @param {number} tvmazeId - TVMaze show ID
 * @returns {Promise<Object>} - Show details
 */
async function getTVMazeShowDetails(tvmazeId) {
    try {
        const response = await fetch(`${TVMAZE_API_URL}/shows/${tvmazeId}`);

        if (!response.ok) {
            console.error('TVMaze API error:', response.status);
            return null;
        }

        const show = await response.json();

        return {
            id: show.id,
            title: show.name,
            year: show.premiered ? parseInt(show.premiered.split('-')[0]) : 'N/A',
            image: show.image ? show.image.original : null,
            category: show.type === 'Scripted' ? 'TV Series' : show.type,
            director: show.network ? show.network.name : 'Unknown',
            description: show.summary ? stripHtml(show.summary) : 'No description available',
            themes: show.genres ? show.genres.join(', ') : 'N/A',
            rating: show.rating ? show.rating.average : 0,
            runtime: show.runtime,
            status: show.status,
            url: show.url,
            isFromTVMaze: true
        };
    } catch (error) {
        console.error('Error fetching TVMaze show details:', error);
        return null;
    }
}

/**
 * Strip HTML tags from a string
 * @param {string} html - HTML string
 * @returns {string} - Plain text
 */
function stripHtml(html) {
    const temp = document.createElement('div');
    temp.innerHTML = html;
    return temp.textContent || temp.innerText;
}

/**
 * Search with diverse fallback - combines multiple strategies
 * @param {string} query - Search query
 * @param {Array} localMovies - Local movies array
 * @param {number} limit - Maximum results
 * @returns {Promise<Array>} - Diverse combined search results
 */
async function searchWithFallback(query, localMovies, limit = 8) {
    if (!query || query.length < 2) {
        return [];
    }

    const queryLower = query.toLowerCase();

    // Enhanced local search with fuzzy matching
    const localResults = localMovies
        .map(movie => {
            const searchableText = [
                movie.title,
                movie.category,
                movie.director,
                movie.themes,
                movie.description,
                movie.year.toString()
            ].join(' ').toLowerCase();

            const isExactMatch = searchableText.includes(queryLower);
            const isPartialMatch = hasPartialMatch(query, movie.title);
            const similarity = isExactMatch ? 1 : (isPartialMatch ? 0.8 : stringSimilarity(queryLower, movie.title.toLowerCase()));

            return { ...movie, matchScore: similarity, matchType: similarity === 1 ? 'direct' : 'fuzzy' };
        })
        .filter(movie => movie.matchScore > 0.5)
        .sort((a, b) => b.matchScore - a.matchScore);

    // Get diverse TVMaze results
    const tvmazeResults = await searchTVMaze(query, localMovies, limit);

    // Combine results (local first, then TVMaze, prioritizing diversity)
    const combinedResults = [
        ...localResults.slice(0, Math.ceil(limit / 2)),
        ...tvmazeResults.filter(show => {
            // Filter out shows that are already in local results
            const isDuplicate = localResults.some(local =>
                local.title.toLowerCase() === show.title.toLowerCase()
            );
            return !isDuplicate;
        })
    ];

    // Ensure we have diverse results
    return combinedResults.slice(0, limit);
}

/**
 * Clear the search cache
 */
function clearSearchCache() {
    searchCache.clear();
}

// Export functions for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        searchTVMaze,
        getTVMazeShowDetails,
        searchWithFallback,
        clearSearchCache
    };
}
