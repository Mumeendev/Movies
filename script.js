// Hamburger Menu Toggle
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    // Close menu when clicking on a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });
}

// Movie Data
const movies = [
    // Anime
    {
        id: 1,
        title: "Spirited Away",
        category: "Anime",
        year: 2001,
        emoji: "🐉",
        description: "A young girl enters a magical world of spirits and must find a way to free herself and her parents.",
        themes: "Coming-of-age, Identity, Environmentalism, Courage",
        director: "Hayao Miyazaki",
        rating: 0,
        preview: "Spirited Away follows Chihiro as she navigates a mysterious bathhouse for spirits. The film explores themes of greed, identity, and personal growth through stunning animation and rich storytelling. It won the Academy Award for Best Animated Feature."
    },
    {
        id: 2,
        title: "Your Name",
        category: "Anime",
        year: 2016,
        emoji: "✨",
        description: "Two teenagers discover they are swapping bodies and develop a connection that transcends time and space.",
        themes: "Love, Fate, Time, Connection",
        director: "Makoto Shinkai",
        rating: 0,
        preview: "Your Name is a breathtaking tale of two souls connected across time. The film beautifully combines romance with supernatural elements, exploring destiny and the threads that bind people together. Its stunning visuals and emotional depth captivated audiences worldwide."
    },
    {
        id: 3,
        title: "Princess Mononoke",
        category: "Anime",
        year: 1997,
        emoji: "🐺",
        description: "A prince becomes involved in the struggle between forest gods and humans consuming nature's resources.",
        themes: "Nature vs Industry, War, Morality, Balance",
        director: "Hayao Miyazaki",
        rating: 0,
        preview: "Princess Mononoke is an epic tale that examines the conflict between industrialization and nature. The film presents complex moral questions without clear villains, showing how progress and tradition clash. Its powerful message remains relevant today."
    },
    {
        id: 4,
        title: "Akira",
        category: "Anime",
        year: 1988,
        emoji: "🏍️",
        description: "In a dystopian Neo-Tokyo, a biker gang member gains telekinetic powers that threaten the city.",
        themes: "Power, Corruption, Friendship, Dystopia",
        director: "Katsuhiro Otomo",
        rating: 0,
        preview: "Akira revolutionized anime and cyberpunk aesthetics. Set in post-apocalyptic Tokyo, it explores themes of unchecked power and government corruption. The film's groundbreaking animation and mature themes influenced countless works in both anime and Western media."
    },
    // Drama
    {
        id: 5,
        title: "The Shawshank Redemption",
        category: "Drama",
        year: 1994,
        emoji: "⛓️",
        description: "A banker wrongly imprisoned for murder finds hope and friendship with a fellow inmate over decades.",
        themes: "Hope, Freedom, Friendship, Perseverance",
        director: "Frank Darabont",
        rating: 0,
        preview: "The Shawshank Redemption is a masterclass in storytelling about the resilience of the human spirit. Through Andy's journey, the film explores how hope can survive even in the darkest places. Its message of perseverance and friendship resonates deeply with audiences."
    },
    {
        id: 6,
        title: "Forrest Gump",
        category: "Drama",
        year: 1994,
        emoji: "🏃",
        description: "A man with a low IQ inadvertently influences major historical events while searching for his true love.",
        themes: "Destiny, Love, Innocence, American History",
        director: "Robert Zemeckis",
        rating: 0,
        preview: "Forrest Gump weaves a simple man through decades of American history. The film uses Forrest's journey to explore how ordinary people can impact extraordinary events. Its heartfelt message about life being 'like a box of chocolates' became iconic."
    },
    {
        id: 7,
        title: "The Godfather",
        category: "Drama",
        year: 1972,
        emoji: "🎩",
        description: "The patriarch of a powerful crime family transfers control to his reluctant youngest son.",
        themes: "Family, Power, Loyalty, Corruption",
        director: "Francis Ford Coppola",
        rating: 0,
        preview: "The Godfather is an epic exploration of power, family, and the American dream's dark side. Michael's transformation from war hero to crime boss examines how circumstances and choices shape destiny. It remains one of cinema's greatest achievements."
    },
    {
        id: 8,
        title: "Schindler's List",
        category: "Drama",
        year: 1993,
        emoji: "📋",
        description: "A German businessman saves over a thousand Jewish refugees during the Holocaust.",
        themes: "Humanity, Courage, Evil, Redemption",
        director: "Steven Spielberg",
        rating: 0,
        preview: "Schindler's List is a powerful testament to human courage during humanity's darkest hour. The film shows how one person's moral awakening can save countless lives. Its stark black-and-white cinematography emphasizes the gravity of the Holocaust."
    },
    // Kdrama
    {
        id: 9,
        title: "Crash Landing on You",
        category: "Kdrama",
        year: 2019,
        emoji: "🪂",
        description: "A South Korean heiress accidentally paraglides into North Korea and falls in love with an army officer.",
        themes: "Love, Division, Loyalty, Cultural Differences",
        director: "Lee Jung-hyo",
        rating: 0,
        preview: "Crash Landing on You is a sweeping romance that transcends political boundaries. The drama explores the complexities of North and South Korean relations through a love story that defies all odds. It became a cultural phenomenon across Asia."
    },
    {
        id: 10,
        title: "Goblin: The Lonely and Great God",
        category: "Kdrama",
        year: 2016,
        emoji: "⚔️",
        description: "An immortal goblin seeks to end his cursed life by finding his destined bride, the Goblin's Bride.",
        themes: "Fate, Immortality, Sacrifice, Destiny",
        director: "Lee Eung-bok",
        rating: 0,
        preview: "Goblin combines fantasy and romance in a tale of an immortal being seeking release. The drama explores themes of destiny, sacrifice, and the price of immortality. Its cinematic production values and emotional depth set new standards for Kdramas."
    },
    {
        id: 11,
        title: "Descendants of the Sun",
        category: "Kdrama",
        year: 2016,
        emoji: "🎖️",
        description: "A love story between a soldier and a doctor unfolds against the backdrop of war-torn nations.",
        themes: "Duty, Love, Heroism, Sacrifice",
        director: "Lee Eung-bok",
        rating: 0,
        preview: "Descendants of the Sun captures the tension between duty and love in dangerous circumstances. The drama showcases the sacrifices military personnel and medical workers make. It sparked international interest in Korean dramas and culture."
    },
    {
        id: 12,
        title: "Itaewon Class",
        category: "Kdrama",
        year: 2020,
        emoji: "🍺",
        description: "An ex-convict opens a bar-restaurant to seek revenge on the food company that destroyed his family.",
        themes: "Revenge, Ambition, Justice, Entrepreneurship",
        director: "Kim Sung-yoon",
        rating: 0,
        preview: "Itaewon Class is an inspiring story of revenge and redemption through entrepreneurship. The drama tackles social issues like discrimination and corporate corruption while showing how determination can overcome seemingly insurmountable obstacles."
    },
    // Nollywood
    {
        id: 13,
        title: "The Wedding Party",
        category: "Nollywood",
        year: 2016,
        emoji: "💒",
        description: "A lavish wedding day descends into chaos as families clash and secrets are revealed.",
        themes: "Family, Culture, Love, Comedy",
        director: "Kemi Adetiba",
        rating: 0,
        preview: "The Wedding Party became Nigeria's highest-grossing film at its release. It explores Nigerian wedding culture with humor and heart, showing how family dynamics and cultural expectations can turn the perfect day into beautiful chaos."
    },
    {
        id: 14,
        title: "Lionheart",
        category: "Nollywood",
        year: 2018,
        emoji: "🦁",
        description: "A woman takes over her father's transport company and fights to prove herself in a male-dominated industry.",
        themes: "Leadership, Gender Equality, Family Business, Tradition",
        director: "Genevieve Nnaji",
        rating: 0,
        preview: "Lionheart addresses gender inequality in corporate Nigeria while celebrating family legacy. It was Nigeria's first submission for the Academy Awards. The film highlights the challenges women face in male-dominated industries."
    },
    {
        id: 15,
        title: "King of Boys",
        category: "Nollywood",
        year: 2018,
        emoji: "👑",
        description: "A businesswoman and politician becomes entangled in a dangerous power struggle with a young soldier.",
        themes: "Power, Politics, Ambition, Survival",
        director: "Kemi Adetiba",
        rating: 0,
        preview: "King of Boys is a gripping political thriller that examines power dynamics in Nigeria. The film explores how ambition and politics intersect, showing the dangerous games played by those seeking influence. Its intense narrative keeps viewers engaged."
    },
    {
        id: 16,
        title: "Half of a Yellow Sun",
        category: "Nollywood",
        year: 2013,
        emoji: "☀️",
        description: "Sisters' lives are upended by the Nigerian Civil War in this adaptation of Chimamanda Ngozi Adichie's novel.",
        themes: "War, Love, Identity, Nigerian History",
        director: "Biyi Bandele",
        rating: 0,
        preview: "Half of a Yellow Sun brings to life the Biafran War through intimate personal stories. Based on the acclaimed novel, it shows how war affects ordinary people and relationships. The film serves as both entertainment and historical education."
    }
];

// Category Filter
const categories = ["All", "Anime", "Drama", "Kdrama", "Nollywood"];
let currentCategory = "All";

// DOM Elements
const moviesGrid = document.getElementById('movies-grid');
const modal = document.getElementById('preview-modal');
const modalBody = document.getElementById('modal-body');
const closeModal = document.querySelector('.close-modal');

// Initialize
document.addEventListener('DOMContentLoaded', async () => {
    renderCategoryTabs();
    
    // Try to load from TVMaze API first
    await loadMoviesFromTVMaze();
    
    renderMovies();
    setupEventListeners();
    loadRatings();
});

// Load movies from TVMaze API
async function loadMoviesFromTVMaze() {
    const moviesGrid = document.getElementById('movies-grid');
    
    try {
        // Show loading state
        if (moviesGrid) {
            moviesGrid.innerHTML = `
                <div class="loading-tvmaze">
                    <div class="loading-spinner"></div>
                    <p>Loading featured movies...</p>
                </div>
            `;
        }

        // Fetch popular shows from TVMaze
        const popularShows = await fetchPopularShows(30);
        const dramaShows = await fetchShowsByGenre('drama', 20);
        const comedyShows = await fetchShowsByGenre('comedy', 20);
        const thrillerShows = await fetchShowsByGenre('thriller', 20);

        // Combine with local movies and deduplicate
        const allShows = new Map();
        
        // Add local movies first
        movies.forEach(movie => {
            allShows.set(movie.title.toLowerCase(), movie);
        });

        // Add TVMaze shows
        [...popularShows, ...dramaShows, ...comedyShows, ...thrillerShows]
            .filter(show => show !== null)
            .forEach(show => {
                if (!allShows.has(show.title.toLowerCase())) {
                    allShows.set(show.title.toLowerCase(), show);
                }
            });

        // Update the movies array with combined results
        window.allMovies = Array.from(allShows.values());
        
        console.log(`✅ Loaded ${window.allMovies.length} movies (${movies.length} local + ${window.allMovies.length - movies.length} from TVMaze)`);
        
    } catch (error) {
        console.error('⚠️ Failed to load from TVMaze, using local movies:', error);
        window.allMovies = movies;
    }
}

// Render Category Tabs
function renderCategoryTabs() {
    const moviesSection = document.querySelector('.movies-section');
    const tabsContainer = document.createElement('div');
    tabsContainer.className = 'category-tabs';
    
    categories.forEach(category => {
        const tab = document.createElement('button');
        tab.className = 'tab-btn' + (category === 'All' ? ' active' : '');
        tab.textContent = category;
        tab.addEventListener('click', () => filterByCategory(category));
        tabsContainer.appendChild(tab);
    });
    
    moviesSection.insertBefore(tabsContainer, moviesGrid);
}

// Filter by Category
function filterByCategory(category) {
    currentCategory = category;
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.toggle('active', btn.textContent === category);
    });
    renderMovies();
}

// Render Movies
function renderMovies() {
    // Use combined movies array (local + TVMaze)
    const moviesToRender = window.allMovies || movies;
    
    const filteredMovies = currentCategory === 'All'
        ? moviesToRender
        : moviesToRender.filter(movie => movie.category === currentCategory);

    moviesGrid.innerHTML = '';

    if (filteredMovies.length === 0) {
        moviesGrid.innerHTML = `
            <div class="loading-tvmaze">
                <p>No movies in this category yet.</p>
            </div>
        `;
        return;
    }

    filteredMovies.forEach(movie => {
        const movieCard = createMovieCard(movie);
        moviesGrid.appendChild(movieCard);
    });
}

// Create Movie Card
function createMovieCard(movie) {
    const card = document.createElement('div');
    card.className = 'movie-card';

    const stars = [1, 2, 3, 4, 5].map(num => {
        const star = document.createElement('span');
        star.className = 'star' + (num <= (movie.rating || 0) ? ' active' : '');
        star.innerHTML = '★';
        star.addEventListener('click', () => rateMovie(movie.id, num));
        return star;
    });

    // TVMaze badge
    const tvmazeBadge = movie.isFromTVMaze ? 
        '<span class="tvmaze-source-badge">TVMaze</span>' : '';

    // Image HTML
    const imageHtml = movie.image ?
        `<img src="${movie.image}" alt="${movie.title}" style="width:100%;height:100%;object-fit:cover;" onerror="handleMovieImageError(this, '${movie.title.replace(/'/g, "\\'")}')">` :
        `<div class="poster-fallback-dynamic" style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);">
            <div class="fallback-initial">${movie.title.charAt(0).toUpperCase()}</div>
            <div class="fallback-title">${movie.title}</div>
        </div>`;

    card.innerHTML = `
        <div class="movie-poster">
            ${tvmazeBadge}
            ${imageHtml}
        </div>
        <div class="movie-info">
            <h3 class="movie-title">${movie.title}</h3>
            <div class="movie-meta">
                <span class="movie-category">${movie.category}</span>
                <span>${movie.year}</span>
            </div>
            <p class="movie-description">${movie.description}</p>
            <div class="rating-section">
                <div class="rating-stars">
                    ${stars.map(s => s.outerHTML).join('')}
                </div>
                <span class="rating-value">${movie.rating > 0 ? movie.rating + '/5' : 'Not rated'}</span>
            </div>
            <button class="btn-preview" data-id="${movie.id}">
                ${movie.isFromTVMaze ? 'View on TVMaze ↗' : 'Preview'}
            </button>
        </div>
    `;

    // Add click handler for the button
    const previewBtn = card.querySelector('.btn-preview');
    previewBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        if (movie.isFromTVMaze && movie.url) {
            window.open(movie.url, '_blank');
        } else {
            showMoviePreview(movie.id);
        }
    });

    return card;
}

// Rate Movie
function rateMovie(movieId, rating) {
    const moviesToRate = window.allMovies || movies;
    const movie = moviesToRate.find(m => m.id === movieId);
    if (movie) {
        movie.rating = rating;
        saveRatings();
        renderMovies();
    }
}

// Save Ratings to LocalStorage
function saveRatings() {
    const moviesToSave = window.allMovies || movies;
    const ratings = {};
    moviesToSave.forEach(movie => {
        if (movie.rating > 0) {
            ratings[movie.id] = movie.rating;
        }
    });
    localStorage.setItem('movieRatings', JSON.stringify(ratings));
}

// Load Ratings from LocalStorage
function loadRatings() {
    const moviesToLoad = window.allMovies || movies;
    const ratings = JSON.parse(localStorage.getItem('movieRatings')) || {};
    moviesToLoad.forEach(movie => {
        if (ratings[movie.id]) {
            movie.rating = ratings[movie.id];
        }
    });
}

// Show Movie Preview
function showMoviePreview(movieId) {
    const moviesToPreview = window.allMovies || movies;
    const movie = moviesToPreview.find(m => m.id === movieId);
    if (!movie) return;
    
    modalBody.innerHTML = `
        <h2>${movie.emoji} ${movie.title}</h2>
        <div class="movie-details">
            <div class="detail-row">
                <span class="detail-label">Category:</span>
                <span class="detail-value">${movie.category}</span>
            </div>
            <div class="detail-row">
                <span class="detail-label">Year:</span>
                <span class="detail-value">${movie.year}</span>
            </div>
            <div class="detail-row">
                <span class="detail-label">Director:</span>
                <span class="detail-value">${movie.director}</span>
            </div>
            <div class="detail-row">
                <span class="detail-label">Themes:</span>
                <span class="detail-value">${movie.themes}</span>
            </div>
            <div class="detail-row">
                <span class="detail-label">Your Rating:</span>
                <span class="detail-value">${movie.rating > 0 ? movie.rating + ' ★' : 'Not rated yet'}</span>
            </div>
        </div>
        <div class="preview-section">
            <h3>Movie Preview & Analysis</h3>
            <p class="preview-text">${movie.preview}</p>
        </div>
        <div class="preview-section">
            <h3>What You'll Learn</h3>
            <p class="preview-text">This film offers valuable insights into ${movie.themes.toLowerCase()}. Understanding these elements will deepen your appreciation of cinema and help you analyze storytelling techniques used by filmmakers.</p>
        </div>
    `;
    
    modal.classList.add('active');
}

// Setup Event Listeners
function setupEventListeners() {
    // Preview buttons
    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('btn-preview')) {
            const movieId = parseInt(e.target.dataset.id);
            showMoviePreview(movieId);
        }
    });

    // Close modal
    closeModal.addEventListener('click', () => {
        modal.classList.remove('active');
    });

    // Close modal on outside click
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('active');
        }
    });

    // Smooth scroll for navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Escape key closes modal
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            modal.classList.remove('active');
        }
    });

    // Initialize search
    initializeSearch();
    initializeHeroSearch();
}

// ==================== SEARCH FUNCTIONALITY ====================

// Initialize Hero Search (on landing page)
function initializeHeroSearch() {
    const heroSearchInput = document.getElementById('hero-search');
    const heroSearchResults = document.getElementById('hero-search-results');

    if (!heroSearchInput || !heroSearchResults) return;

    let searchTimeout = null;

    heroSearchInput.addEventListener('input', (e) => {
        const query = e.target.value.trim().toLowerCase();

        if (query.length < 2) {
            heroSearchResults.classList.remove('active');
            heroSearchResults.innerHTML = '';
            return;
        }

        if (searchTimeout) {
            clearTimeout(searchTimeout);
        }

        searchTimeout = setTimeout(async () => {
            try {
                heroSearchResults.innerHTML = `
                    <div class="search-loading">
                        <span>🔍</span>
                        <p>Searching...</p>
                    </div>
                `;
                heroSearchResults.classList.add('active');

                const results = await searchWithFallback(query, window.allMovies || movies, 10);
                displayHeroSearchResults(results, query);
            } catch (error) {
                console.error('Hero search error:', error);
            }
        }, 300);
    });

    heroSearchInput.addEventListener('keydown', (e) => {
        const items = heroSearchResults.querySelectorAll('.search-result-item');
        const activeItem = heroSearchResults.querySelector('.search-result-item:hover');
        const currentIndex = Array.from(items).indexOf(activeItem);

        if (e.key === 'ArrowDown') {
            e.preventDefault();
            const nextIndex = (currentIndex + 1) % items.length;
            items[nextIndex]?.focus();
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            const prevIndex = (currentIndex - 1 + items.length) % items.length;
            items[prevIndex]?.focus();
        } else if (e.key === 'Enter' && activeItem) {
            e.preventDefault();
            activeItem.click();
        } else if (e.key === 'Escape') {
            heroSearchResults.classList.remove('active');
            heroSearchInput.blur();
        }
    });

    document.addEventListener('click', (e) => {
        if (!e.target.closest('.hero-search-box')) {
            heroSearchResults.classList.remove('active');
        }
    });
}

function displayHeroSearchResults(results, query) {
    const heroSearchResults = document.getElementById('hero-search-results');

    if (results.length === 0) {
        heroSearchResults.innerHTML = `
            <div class="search-no-results">
                <span>🎬</span>
                <p>No movies found matching "<strong>${escapeHtml(query)}</strong>"</p>
                <p style="font-size: 0.85rem; margin-top: 0.5rem;">Try searching by title, genre, or themes</p>
            </div>
        `;
        heroSearchResults.classList.add('active');
        return;
    }

    heroSearchResults.innerHTML = results.map(movie => {
        const matchBadge = movie.matchType ? 
            `<span class="match-type-badge match-${movie.matchType}">${movie.matchType}</span>` : '';

        if (movie.isFromTVMaze) {
            return `
                <a href="${movie.url}" target="_blank" class="search-result-item tvmaze-result match-${movie.matchType || 'direct'}">
                    <div class="search-result-poster">
                        <img src="${movie.image}" alt="${movie.title}" style="width:100%;height:100%;object-fit:cover;border-radius:8px;"
                             onerror="this.parentElement.innerHTML='<div class=\\'search-poster-fallback\\'>${movie.title.charAt(0)}</div>'">
                    </div>
                    <div class="search-result-info">
                        <div class="search-result-title">${highlightText(movie.title, query)} ${matchBadge}</div>
                        <div class="search-result-meta">
                            ${movie.category} • ${movie.year} • <span class="tvmaze-badge">TVMaze</span>
                        </div>
                    </div>
                </a>
            `;
        } else {
            return `
                <a href="movie-detail.html?id=${movie.id}" class="search-result-item match-${movie.matchType || 'direct'}">
                    <div class="search-result-poster">
                        <img src="${movie.image}" alt="${movie.title}" style="width:100%;height:100%;object-fit:cover;border-radius:8px;"
                             onerror="handleMovieImageError(this, '${movie.title.replace(/'/g, "\\'")}')">
                    </div>
                    <div class="search-result-info">
                        <div class="search-result-title">${highlightText(movie.title, query)} ${matchBadge}</div>
                        <div class="search-result-meta">
                            ${movie.category} • ${movie.year} • ${movie.director}
                        </div>
                    </div>
                </a>
            `;
        }
    }).join('');

    heroSearchResults.classList.add('active');
}

function initializeSearch() {
    const searchInput = document.getElementById('nav-search');
    const searchResults = document.getElementById('search-results');

    if (!searchInput || !searchResults) return;

    let searchTimeout = null;

    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.trim().toLowerCase();

        if (query.length < 2) {
            searchResults.classList.remove('active');
            searchResults.innerHTML = '';
            return;
        }

        // Clear previous timeout
        if (searchTimeout) {
            clearTimeout(searchTimeout);
        }

        // Debounce search to avoid too many API calls
        searchTimeout = setTimeout(() => {
            searchMoviesWithTVMaze(query);
        }, 300);
    });

    searchInput.addEventListener('focus', () => {
        const query = searchInput.value.trim().toLowerCase();
        if (query.length >= 2) {
            searchMoviesWithTVMaze(query);
        }
    });

    document.addEventListener('click', (e) => {
        if (!e.target.closest('.search-container')) {
            searchResults.classList.remove('active');
        }
    });

    searchInput.addEventListener('keydown', (e) => {
        const items = searchResults.querySelectorAll('.search-result-item');
        const activeItem = searchResults.querySelector('.search-result-item:hover');
        const currentIndex = Array.from(items).indexOf(activeItem);

        if (e.key === 'ArrowDown') {
            e.preventDefault();
            const nextIndex = (currentIndex + 1) % items.length;
            items[nextIndex]?.focus();
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            const prevIndex = (currentIndex - 1 + items.length) % items.length;
            items[prevIndex]?.focus();
        } else if (e.key === 'Enter' && activeItem) {
            e.preventDefault();
            activeItem.click();
        } else if (e.key === 'Escape') {
            searchResults.classList.remove('active');
            searchInput.blur();
        }
    });
}

async function searchMoviesWithTVMaze(query) {
    const searchResults = document.getElementById('search-results');
    
    try {
        // Show loading state
        searchResults.innerHTML = `
            <div class="search-loading">
                <span>🔍</span>
                <p>Searching...</p>
            </div>
        `;
        searchResults.classList.add('active');

        // Search with TVMaze API fallback
        const results = await searchWithFallback(query, movies, 8);
        displaySearchResults(results, query);
    } catch (error) {
        console.error('Search error:', error);
        // Fallback to local search only
        const localResults = searchMoviesLocal(query);
        displaySearchResults(localResults, query);
    }
}

function searchMoviesLocal(query) {
    const moviesToSearch = window.allMovies || movies;
    return moviesToSearch.filter(movie => {
        const searchableText = [
            movie.title,
            movie.category,
            movie.director,
            movie.themes,
            movie.description,
            movie.year.toString()
        ].join(' ').toLowerCase();

        return searchableText.includes(query);
    }).slice(0, 8);
}

function displaySearchResults(results, query) {
    const searchResults = document.getElementById('search-results');

    if (results.length === 0) {
        searchResults.innerHTML = `
            <div class="search-no-results">
                <span>🎬</span>
                <p>No movies found matching "<strong>${escapeHtml(query)}</strong>"</p>
                <p style="font-size: 0.85rem; margin-top: 0.5rem;">Try searching by title, category, genre (e.g., "drama", "anime"), or themes</p>
            </div>
        `;
        searchResults.classList.add('active');
        return;
    }

    searchResults.innerHTML = results.map(movie => {
        const matchBadge = movie.matchType ? 
            `<span class="match-type-badge match-${movie.matchType}">${movie.matchType}</span>` : '';

        if (movie.isFromTVMaze) {
            // TVMaze result
            return `
                <a href="${movie.url}" target="_blank" class="search-result-item tvmaze-result match-${movie.matchType || 'direct'}">
                    <div class="search-result-poster">
                        <img src="${movie.image}" alt="${movie.title}" style="width:100%;height:100%;object-fit:cover;border-radius:6px;"
                             onerror="this.style.display='none'; this.parentElement.innerHTML='<div class=\\'search-poster-fallback\\'>${movie.title.charAt(0)}</div>'">
                    </div>
                    <div class="search-result-info">
                        <div class="search-result-title">${highlightText(movie.title, query)} ${matchBadge}</div>
                        <div class="search-result-meta">
                            ${movie.category} • ${movie.year} • <span class="tvmaze-badge">TVMaze</span>
                        </div>
                    </div>
                </a>
            `;
        } else {
            // Local movie result
            return `
                <a href="movie-detail.html?id=${movie.id}" class="search-result-item match-${movie.matchType || 'direct'}">
                    <div class="search-result-poster">
                        <img src="${movie.image}" alt="${movie.title}" style="width:100%;height:100%;object-fit:cover;border-radius:6px;"
                             onerror="handleMovieImageError(this, '${movie.title.replace(/'/g, "\\'")}')">
                    </div>
                    <div class="search-result-info">
                        <div class="search-result-title">${highlightText(movie.title, query)} ${matchBadge}</div>
                        <div class="search-result-meta">
                            ${movie.category} • ${movie.year} • ${movie.director}
                        </div>
                    </div>
                </a>
            `;
        }
    }).join('');

    searchResults.classList.add('active');
}

function highlightText(text, query) {
    const regex = new RegExp(`(${escapeRegex(query)})`, 'gi');
    return text.replace(regex, '<mark>$1</mark>');
}

function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

function escapeRegex(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}
