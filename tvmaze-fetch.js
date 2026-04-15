/**
 * TVMaze API Data Fetcher
 * Fetches movies/shows directly from https://api.tvmaze.com/
 * Integrates with the existing MovieLearn app structure
 */

const TVMAZE_API = 'https://api.tvmaze.com';

// Cache for fetched shows
const showsCache = new Map();

/**
 * Fetch shows from TVMaze API
 * @param {string} endpoint - API endpoint
 * @param {Object} params - Query parameters
 * @returns {Promise<Array>} - Array of shows
 */
async function fetchFromTVMaze(endpoint, params = {}) {
    const cacheKey = `${endpoint}_${JSON.stringify(params)}`;
    
    if (showsCache.has(cacheKey)) {
        return showsCache.get(cacheKey);
    }

    try {
        const url = new URL(`${TVMAZE_API}${endpoint}`);
        Object.keys(params).forEach(key => url.searchParams.append(key, key));

        const response = await fetch(url.toString());
        
        if (!response.ok) {
            console.error('TVMaze API error:', response.status);
            return [];
        }

        const data = await response.json();
        showsCache.set(cacheKey, data);
        
        return data;
    } catch (error) {
        console.error('Error fetching from TVMaze:', error);
        return [];
    }
}

/**
 * Transform TVMaze show to MovieLearn format
 * @param {Object} show - TVMaze show object
 * @returns {Object} - Transformed show
 */
function transformShow(show) {
    if (!show) return null;

    const year = show.premiered ? parseInt(show.premiered.split('-')[0]) : 'N/A';
    const genres = show.genres || [];
    
    // Map TVMaze genres to MovieLearn categories
    let category = 'TV Series';
    if (genres.some(g => ['Animation', 'Anime'].includes(g))) {
        category = 'Anime';
    } else if (genres.some(g => g.toLowerCase().includes('korean'))) {
        category = 'Kdrama';
    } else if (genres.includes('Drama')) {
        category = 'Drama';
    } else if (genres.includes('Comedy')) {
        category = 'Comedy';
    } else if (genres.includes('Thriller')) {
        category = 'Thriller';
    } else if (genres.includes('Horror')) {
        category = 'Horror';
    }

    return {
        id: show.id,
        title: show.name,
        category: category,
        year: year,
        image: show.image ? show.image.medium : null,
        imageOriginal: show.image ? show.image.original : null,
        description: show.summary ? stripHtmlTags(show.summary) : 'No description available.',
        themes: genres.length > 0 ? genres.join(', ') : 'N/A',
        director: show.network ? show.network.name : 'Streaming',
        rating: show.rating && show.rating.average ? show.rating.average : 0,
        runtime: show.runtime || 'N/A',
        status: show.status || 'Unknown',
        url: show.url || `${TVMAZE_API}/shows/${show.id}`,
        genres: genres,
        isFromTVMaze: true,
        tvmazeId: show.id
    };
}

/**
 * Strip HTML tags from string
 */
function stripHtmlTags(html) {
    const temp = document.createElement('div');
    temp.innerHTML = html;
    return temp.textContent || temp.innerText || '';
}

/**
 * Fetch popular/shows currently on air
 * @returns {Promise<Array>} - Array of shows
 */
async function fetchPopularShows(limit = 50) {
    // TVMaze doesn't have a "popular" endpoint, so we'll use schedule
    const scheduleData = await fetchFromTVMaze('/schedule', {
        country: 'US',
        date: new Date().toISOString().split('T')[0]
    });

    if (!scheduleData || scheduleData.length === 0) {
        // Fallback: search for popular shows
        return await searchShows('the', limit);
    }

    const uniqueShows = new Map();
    scheduleData.forEach(item => {
        if (item.show && !uniqueShows.has(item.show.id)) {
            uniqueShows.set(item.show.id, transformShow(item.show));
        }
    });

    return Array.from(uniqueShows.values()).slice(0, limit);
}

/**
 * Search for shows by query
 * @param {string} query - Search query
 * @param {number} limit - Max results
 * @returns {Promise<Array>} - Array of shows
 */
async function searchShows(query, limit = 50) {
    const searchData = await fetchFromTVMaze(`/search/shows?q=${encodeURIComponent(query)}`);
    
    if (!searchData || searchData.length === 0) {
        return [];
    }

    return searchData
        .slice(0, limit)
        .map(item => transformShow(item.show))
        .filter(show => show !== null);
}

/**
 * Get shows by genre/type
 * @param {string} genre - Genre to search
 * @param {number} limit - Max results
 * @returns {Promise<Array>} - Array of shows
 */
async function fetchShowsByGenre(genre, limit = 50) {
    const searchData = await searchShows(genre, limit);
    return searchData;
}

/**
 * Get show details by ID
 * @param {number} showId - TVMaze show ID
 * @returns {Promise<Object>} - Show details
 */
async function fetchShowDetails(showId) {
    const showData = await fetchFromTVMaze(`/shows/${showId}`);
    return transformShow(showData);
}

/**
 * Get episode list for a show
 * @param {number} showId - TVMaze show ID
 * @returns {Promise<Array>} - Array of episodes
 */
async function fetchShowEpisodes(showId) {
    const episodesData = await fetchFromTVMaze(`/shows/${showId}/episodes`);
    return episodesData.map(ep => ({
        id: ep.id,
        season: ep.season,
        number: ep.number,
        title: ep.name,
        airdate: ep.airdate,
        runtime: ep.runtime,
        summary: ep.summary ? stripHtmlTags(ep.summary) : 'No summary available',
        image: ep.image ? ep.image.medium : null
    }));
}

/**
 * Get cast for a show
 * @param {number} showId - TVMaze show ID
 * @returns {Promise<Array>} - Array of cast members
 */
async function fetchShowCast(showId) {
    const castData = await fetchFromTVMaze(`/shows/${showId}/cast`);
    return castData.map(c => ({
        name: c.person.name,
        character: c.character ? c.character.name : 'Unknown',
        image: c.person.image ? c.person.image.medium : null
    }));
}

/**
 * Initialize MovieLearn with TVMaze data
 * Fetches shows and populates the movies grid
 */
async function initializeWithTVMaze() {
    console.log('🎬 Loading shows from TVMaze API...');

    // Show loading state
    const moviesGrid = document.getElementById('movies-grid');
    if (moviesGrid) {
        moviesGrid.innerHTML = `
            <div class="loading-tvmaze">
                <div class="loading-spinner"></div>
                <p>Loading shows from TVMaze...</p>
            </div>
        `;
    }

    try {
        // Fetch shows from multiple sources for variety
        const [
            popularShows,
            dramaShows,
            comedyShows,
            thrillerShows
        ] = await Promise.all([
            fetchPopularShows(30),
            fetchShowsByGenre('drama', 20),
            fetchShowsByGenre('comedy', 20),
            fetchShowsByGenre('thriller', 20)
        ]);

        // Combine and deduplicate
        const allShows = new Map();
        
        [...popularShows, ...dramaShows, ...comedyShows, ...thrillerShows]
            .filter(show => show !== null)
            .forEach(show => {
                if (!allShows.has(show.id)) {
                    allShows.set(show.id, show);
                }
            });

        const shows = Array.from(allShows.values());

        console.log(`✅ Loaded ${shows.length} shows from TVMaze`);

        // Store globally for use in search and display
        window.tvmazeShows = shows;
        
        // Update the movies array if it exists
        if (typeof movies !== 'undefined') {
            // Add TVMaze shows to existing movies
            const tvmazeMovies = shows.map((show, index) => ({
                ...show,
                id: 1000 + index // Use high IDs to avoid conflicts
            }));
            
            window.allMovies = [...movies, ...tvmazeMovies];
        } else {
            window.allMovies = shows.map((show, index) => ({
                ...show,
                id: 1000 + index
            }));
        }

        // Render if on movies page
        if (moviesGrid && typeof renderMovies === 'function') {
            renderMovies();
        }

        return shows;
    } catch (error) {
        console.error('❌ Error loading from TVMaze:', error);
        
        if (moviesGrid) {
            moviesGrid.innerHTML = `
                <div class="error-tvmaze">
                    <p>⚠️ Failed to load from TVMaze API</p>
                    <p class="error-hint">Showing local movies instead</p>
                </div>
            `;
        }

        return [];
    }
}

/**
 * Clear TVMaze cache
 */
function clearTVMazeCache() {
    showsCache.clear();
    console.log('🗑️ TVMaze cache cleared');
}

// Auto-initialize if on movies page or home page
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        // Check if we should load from TVMaze
        if (window.location.pathname.includes('movies.html') || 
            window.location.pathname === '/' || 
            window.location.pathname.includes('index.html')) {
            initializeWithTVMaze();
        }
    });
} else {
    if (window.location.pathname.includes('movies.html') || 
        window.location.pathname === '/' || 
        window.location.pathname.includes('index.html')) {
        initializeWithTVMaze();
    }
}

// Export functions
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        fetchFromTVMaze,
        transformShow,
        fetchPopularShows,
        searchShows,
        fetchShowsByGenre,
        fetchShowDetails,
        fetchShowEpisodes,
        fetchShowCast,
        initializeWithTVMaze,
        clearTVMazeCache
    };
}
