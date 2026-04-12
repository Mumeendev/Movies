// Movie Data
const movies = [
    // Anime
    {
        id: 1,
        title: "Spirited Away",
        category: "Anime",
        year: 2001,
        image: "https://image.tmdb.org/t/p/w500/39wmItIWsg5sZMyRUHLkWBcuVCM.jpg",
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
        image: "https://image.tmdb.org/t/p/w500/1TDV5ILRBDBLWwBwBhL3fYcYhKk.jpg",
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
        image: "https://image.tmdb.org/t/p/w500/jHWmNrTm544HK0dG3vYkI6aKjLq.jpg",
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
        image: "https://image.tmdb.org/t/p/w500/neZ0ykEsP8eAbcwDCPPF3fjVpOm.jpg",
        description: "In a dystopian Neo-Tokyo, a biker gang member gains telekinetic powers that threaten the city.",
        themes: "Power, Corruption, Friendship, Dystopia",
        director: "Katsuhiro Otomo",
        rating: 0,
        preview: "Akira revolutionized anime and cyberpunk aesthetics. Set in post-apocalyptic Tokyo, it explores themes of unchecked power and government corruption. The film's groundbreaking animation and mature themes influenced countless works in both anime and Western media."
    },
    {
        id: 5,
        title: "Jujutsu Kaisen",
        category: "Anime",
        year: 2020,
        image: "https://image.tmdb.org/t/p/w500/wjQ6ZbqWJkZ5qMqLqLqLqLqLqL.jpg",
        description: "A high school student joins a secret organization of sorcerers to fight powerful curses after swallowing a cursed finger.",
        themes: "Good vs Evil, Friendship, Sacrifice, Power",
        director: "Sunghoo Park",
        rating: 0,
        preview: "Jujutsu Kaisen is a modern anime sensation that redefines battle shonen. With stunning animation by MAPPA, it follows Yuji Itadori as he navigates the dangerous world of curses and sorcerers. Its dynamic fight scenes and complex characters make it a standout series."
    },
    {
        id: 6,
        title: "Naruto",
        category: "Anime",
        year: 2002,
        image: "https://image.tmdb.org/t/p/w500/x2MxHqLqLqLqLqLqLqLqLqLqLqL.jpg",
        description: "A young ninja with a sealed demon fox inside him dreams of becoming the strongest leader of his village.",
        themes: "Perseverance, Friendship, Destiny, Redemption",
        director: "Hayato Date",
        rating: 0,
        preview: "Naruto is one of the most iconic anime series of all time. It follows the journey of a young outcast as he strives to earn recognition and protect his village. The series explores deep themes of loneliness, bonds, and the cycle of hatred through compelling character development."
    },
    {
        id: 7,
        title: "Attack on Titan",
        category: "Anime",
        year: 2013,
        image: "https://image.tmdb.org/t/p/w500/hTP1DtLGF1FqYs8qLqLqLqLqLqL.jpg",
        description: "Humanity lives inside cities surrounded by enormous walls as protection against gigantic man-eating humanoids.",
        themes: "Freedom, Survival, War, Truth",
        director: "Tetsuro Araki",
        rating: 0,
        preview: "Attack on Titan is a dark and gripping anime that explores the cost of freedom and the horrors of war. The series masterfully builds suspense and reveals shocking truths about its world. Its complex narrative and moral ambiguity make it one of the greatest anime of the decade."
    },
    {
        id: 8,
        title: "Demon Slayer",
        category: "Anime",
        year: 2019,
        image: "https://image.tmdb.org/t/p/w500/wrCVHdkBlwwYNHqLqLqLqLqLqL.jpg",
        description: "A young boy becomes a demon slayer after his family is slaughtered and his sister is turned into a demon.",
        themes: "Family, Determination, Good vs Evil, Tragedy",
        director: "Haruo Sotozaki",
        rating: 0,
        preview: "Demon Slayer captivated audiences with its breathtaking animation and emotional storytelling. The series follows Tanjiro's quest to cure his sister and avenge his family. Its fluid fight choreography and heartfelt moments have made it a global phenomenon."
    },
    // Kdrama
    {
        id: 5,
        title: "Crash Landing on You",
        category: "Kdrama",
        year: 2019,
        image: "https://image.tmdb.org/t/p/w500/tD8WjMgFYdXbqTjKHVjBwJpXGfE.jpg",
        description: "A South Korean heiress accidentally paraglides into North Korea and falls in love with an army officer.",
        themes: "Love, Division, Loyalty, Cultural Differences",
        director: "Lee Jung-hyo",
        rating: 0,
        preview: "Crash Landing on You is a sweeping romance that transcends political boundaries. The drama explores the complexities of North and South Korean relations through a love story that defies all odds. It became a cultural phenomenon across Asia."
    },
    {
        id: 6,
        title: "Goblin: The Lonely and Great God",
        category: "Kdrama",
        year: 2016,
        image: "https://image.tmdb.org/t/p/w500/3JkSF5Y4rV8gXqCJbqLqJqLqLqJ.jpg",
        description: "An immortal goblin seeks to end his cursed life by finding his destined bride, the Goblin's Bride.",
        themes: "Fate, Immortality, Sacrifice, Destiny",
        director: "Lee Eung-bok",
        rating: 0,
        preview: "Goblin combines fantasy and romance in a tale of an immortal being seeking release. The drama explores themes of destiny, sacrifice, and the price of immortality. Its cinematic production values and emotional depth set new standards for Kdramas."
    },
    {
        id: 7,
        title: "Descendants of the Sun",
        category: "Kdrama",
        year: 2016,
        image: "https://image.tmdb.org/t/p/w500/rXhFdKbJYqLqLqLqLqLqLqLqLqL.jpg",
        description: "A love story between a soldier and a doctor unfolds against the backdrop of war-torn nations.",
        themes: "Duty, Love, Heroism, Sacrifice",
        director: "Lee Eung-bok",
        rating: 0,
        preview: "Descendants of the Sun captures the tension between duty and love in dangerous circumstances. The drama showcases the sacrifices military personnel and medical workers make. It sparked international interest in Korean dramas and culture."
    },
    {
        id: 8,
        title: "Itaewon Class",
        category: "Kdrama",
        year: 2020,
        image: "https://image.tmdb.org/t/p/w500/sKqLqLqLqLqLqLqLqLqLqLqLqLq.jpg",
        description: "An ex-convict opens a bar-restaurant to seek revenge on the food company that destroyed his family.",
        themes: "Revenge, Ambition, Justice, Entrepreneurship",
        director: "Kim Sung-yoon",
        rating: 0,
        preview: "Itaewon Class is an inspiring story of revenge and redemption through entrepreneurship. The drama tackles social issues like discrimination and corporate corruption while showing how determination can overcome seemingly insurmountable obstacles."
    },
    // Nollywood
    {
        id: 9,
        title: "The Wedding Party",
        category: "Nollywood",
        year: 2016,
        image: "https://image.tmdb.org/t/p/w500/wP8LqLqLqLqLqLqLqLqLqLqLqLq.jpg",
        description: "A lavish wedding day descends into chaos as families clash and secrets are revealed.",
        themes: "Family, Culture, Love, Comedy",
        director: "Kemi Adetiba",
        rating: 0,
        preview: "The Wedding Party became Nigeria's highest-grossing film at its release. It explores Nigerian wedding culture with humor and heart, showing how family dynamics and cultural expectations can turn the perfect day into beautiful chaos."
    },
    {
        id: 10,
        title: "Lionheart",
        category: "Nollywood",
        year: 2018,
        image: "https://image.tmdb.org/t/p/w500/lH8LqLqLqLqLqLqLqLqLqLqLqLq.jpg",
        description: "A woman takes over her father's transport company and fights to prove herself in a male-dominated industry.",
        themes: "Leadership, Gender Equality, Family Business, Tradition",
        director: "Genevieve Nnaji",
        rating: 0,
        preview: "Lionheart addresses gender inequality in corporate Nigeria while celebrating family legacy. It was Nigeria's first submission for the Academy Awards. The film highlights the challenges women face in male-dominated industries."
    },
    {
        id: 11,
        title: "King of Boys",
        category: "Nollywood",
        year: 2018,
        image: "https://image.tmdb.org/t/p/w500/kB8LqLqLqLqLqLqLqLqLqLqLqLq.jpg",
        description: "A businesswoman and politician becomes entangled in a dangerous power struggle with a young soldier.",
        themes: "Power, Politics, Ambition, Survival",
        director: "Kemi Adetiba",
        rating: 0,
        preview: "King of Boys is a gripping political thriller that examines power dynamics in Nigeria. The film explores how ambition and politics intersect, showing the dangerous games played by those seeking influence. Its intense narrative keeps viewers engaged."
    },
    {
        id: 12,
        title: "Half of a Yellow Sun",
        category: "Nollywood",
        year: 2013,
        image: "https://image.tmdb.org/t/p/w500/hY8LqLqLqLqLqLqLqLqLqLqLqLq.jpg",
        description: "Sisters' lives are upended by the Nigerian Civil War in this adaptation of Chimamanda Ngozi Adichie's novel.",
        themes: "War, Love, Identity, Nigerian History",
        director: "Biyi Bandele",
        rating: 0,
        preview: "Half of a Yellow Sun brings to life the Biafran War through intimate personal stories. Based on the acclaimed novel, it shows how war affects ordinary people and relationships. The film serves as both entertainment and historical education."
    },
    // Fantasy
    {
        id: 13,
        title: "The Lord of the Rings: The Fellowship of the Ring",
        category: "Fantasy",
        year: 2001,
        image: "https://image.tmdb.org/t/p/w500/6oom5QYQ2yQTMJIbnvbkBL9cHo6.jpg",
        description: "A young hobbit embarks on a quest to destroy a powerful ring before it falls into the hands of darkness.",
        themes: "Good vs Evil, Friendship, Courage, Destiny",
        director: "Peter Jackson",
        rating: 0,
        preview: "The Fellowship of the Ring is an epic fantasy adventure that redefined the genre. The film explores themes of power, corruption, and the strength found in unity. Its groundbreaking visual effects and rich world-building created a new standard for fantasy cinema."
    },
    {
        id: 14,
        title: "Harry Potter and the Sorcerer's Stone",
        category: "Fantasy",
        year: 2001,
        image: "https://image.tmdb.org/t/p/w500/wuMc08IPKEatf9rnMNXvIDxqP4W.jpg",
        description: "A young boy discovers he is a wizard and begins his magical education at Hogwarts School.",
        themes: "Magic, Friendship, Identity, Good vs Evil",
        director: "Chris Columbus",
        rating: 0,
        preview: "The Sorcerer's Stone introduces audiences to the magical world of Harry Potter. The film captures the wonder of discovering hidden abilities and the importance of choosing your own path. Its enchanting world-building launched one of cinema's most beloved franchises."
    },
    {
        id: 15,
        title: "Pan's Labyrinth",
        category: "Fantasy",
        year: 2006,
        image: "https://image.tmdb.org/t/p/w500/9jOJ6pPqLqLqLqLqLqLqLqLqLq.jpg",
        description: "A young girl escapes into a dark fairy tale world while facing the horrors of post-Civil War Spain.",
        themes: "Fantasy vs Reality, Innocence, War, Rebellion",
        director: "Guillermo del Toro",
        rating: 0,
        preview: "Pan's Labyrinth masterfully blends dark fantasy with historical drama. The film uses fairy tale elements to explore the horrors of war and the power of imagination. Its haunting visuals and emotional depth make it a fantasy masterpiece."
    },
    {
        id: 16,
        title: "The Chronicles of Narnia: The Lion, the Witch and the Wardrobe",
        category: "Fantasy",
        year: 2005,
        image: "https://image.tmdb.org/t/p/w500/iEuaOQdVqLqLqLqLqLqLqLqLqL.jpg",
        description: "Four siblings discover a magical land through a wardrobe and must help defeat an evil witch.",
        themes: "Faith, Courage, Sacrifice, Family",
        director: "Andrew Adamson",
        rating: 0,
        preview: "The Lion, the Witch and the Wardrobe brings C.S. Lewis's beloved novel to life. The film explores themes of faith, sacrifice, and the battle between good and evil through the eyes of children. Its magical world continues to captivate audiences of all ages."
    }
];

// Category Filter
const categories = ["All", "Anime", "Kdrama", "Nollywood", "Fantasy"];
let currentCategory = "All";

// DOM Elements
const moviesGrid = document.getElementById('movies-grid');
const modal = document.getElementById('preview-modal');
const modalBody = document.getElementById('modal-body');
const closeModal = document.querySelector('.close-modal');
const categoryTabs = document.getElementById('category-tabs');

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    renderCategoryTabs();
    renderMovies();
    setupEventListeners();
    loadRatings();
});

// Render Category Tabs
function renderCategoryTabs() {
    categories.forEach(category => {
        const tab = document.createElement('button');
        tab.className = 'tab-btn' + (category === 'All' ? ' active' : '');
        tab.textContent = category;
        tab.addEventListener('click', () => filterByCategory(category));
        categoryTabs.appendChild(tab);
    });
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
    const filteredMovies = currentCategory === 'All' 
        ? movies 
        : movies.filter(movie => movie.category === currentCategory);
    
    moviesGrid.innerHTML = '';
    
    filteredMovies.forEach(movie => {
        const movieCard = createMovieCard(movie);
        moviesGrid.appendChild(movieCard);
    });
}

// Create Movie Card
function createMovieCard(movie) {
    const card = document.createElement('div');
    card.className = 'movie-card';
    card.style.cursor = 'pointer';
    card.addEventListener('click', () => {
        window.location.href = `movie-detail.html?id=${movie.id}`;
    });
    
    const stars = [1, 2, 3, 4, 5].map(num => {
        const star = document.createElement('span');
        star.className = 'star' + (num <= movie.rating ? ' active' : '');
        star.innerHTML = '★';
        star.addEventListener('click', (e) => {
            e.stopPropagation();
            rateMovie(movie.id, num);
        });
        return star;
    });
    
    // Get comments for this movie
    const comments = JSON.parse(localStorage.getItem(`comments_${movie.id}`)) || [];
    const commentsPreview = comments.length > 0 
        ? `<div class="card-comments-preview">
            <span class="comments-count">💬 ${comments.length} comment${comments.length > 1 ? 's' : ''}</span>
            <p class="latest-comment">"${comments[0].text.substring(0, 60)}${comments[0].text.length > 60 ? '...' : ''}"</p>
          </div>`
        : `<div class="card-comments-preview no-comments">
            <span class="comments-count">💬 No comments yet</span>
          </div>`;
    
    card.innerHTML = `
        <div class="movie-poster">
            <img src="${movie.image}" alt="${movie.title}" style="width:100%;height:100%;object-fit:cover;" onerror="this.style.display='none';this.parentElement.innerHTML='${movie.title.charAt(0)}';">
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
            ${commentsPreview}
            <button class="btn-preview" data-id="${movie.id}">View Details & Comments</button>
        </div>
    `;
    
    return card;
}

// Rate Movie
function rateMovie(movieId, rating) {
    const movie = movies.find(m => m.id === movieId);
    if (movie) {
        movie.rating = rating;
        saveRatings();
        renderMovies();
    }
}

// Save Ratings to LocalStorage
function saveRatings() {
    const ratings = {};
    movies.forEach(movie => {
        if (movie.rating > 0) {
            ratings[movie.id] = movie.rating;
        }
    });
    localStorage.setItem('movieRatings', JSON.stringify(ratings));
}

// Load Ratings from LocalStorage
function loadRatings() {
    const ratings = JSON.parse(localStorage.getItem('movieRatings')) || {};
    movies.forEach(movie => {
        if (ratings[movie.id]) {
            movie.rating = ratings[movie.id];
        }
    });
}

// Show Movie Preview
function showMoviePreview(movieId) {
    const movie = movies.find(m => m.id === movieId);
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
    // Preview buttons - navigate to detail page
    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('btn-preview')) {
            const movieId = parseInt(e.target.dataset.id);
            window.location.href = `movie-detail.html?id=${movieId}`;
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
    
    // Escape key closes modal
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            modal.classList.remove('active');
        }
    });
}
