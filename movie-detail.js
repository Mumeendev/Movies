// Movie Data (same as movies.js)
const moviesData = [
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
        preview: "Your Name is a breathtaking tale of two souls connected across time. The film beautifully combines romance with supernatural elements, exploring destiny and the threads that bind people together."
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
        preview: "Princess Mononoke is an epic tale that examines the conflict between industrialization and nature. The film presents complex moral questions without clear villains."
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
        preview: "Akira revolutionized anime and cyberpunk aesthetics. Set in post-apocalyptic Tokyo, it explores themes of unchecked power and government corruption."
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
        preview: "Jujutsu Kaisen is a modern anime sensation that redefines battle shonen. With stunning animation by MAPPA, it follows Yuji Itadori as he navigates the dangerous world of curses and sorcerers."
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
        preview: "Naruto is one of the most iconic anime series of all time. It follows the journey of a young outcast as he strives to earn recognition and protect his village."
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
        preview: "Attack on Titan is a dark and gripping anime that explores the cost of freedom and the horrors of war."
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
        preview: "Demon Slayer captivated audiences with its breathtaking animation and emotional storytelling."
    },
    {
        id: 9,
        title: "Crash Landing on You",
        category: "Kdrama",
        year: 2019,
        image: "https://image.tmdb.org/t/p/w500/tD8WjMgFYdXbqTjKHVjBwJpXGfE.jpg",
        description: "A South Korean heiress accidentally paraglides into North Korea and falls in love with an army officer.",
        themes: "Love, Division, Loyalty, Cultural Differences",
        director: "Lee Jung-hyo",
        rating: 0,
        preview: "Crash Landing on You is a sweeping romance that transcends political boundaries."
    },
    {
        id: 10,
        title: "Goblin: The Lonely and Great God",
        category: "Kdrama",
        year: 2016,
        image: "https://image.tmdb.org/t/p/w500/3JkSF5Y4rV8gXqCJbqLqJqLqLqJ.jpg",
        description: "An immortal goblin seeks to end his cursed life by finding his destined bride, the Goblin's Bride.",
        themes: "Fate, Immortality, Sacrifice, Destiny",
        director: "Lee Eung-bok",
        rating: 0,
        preview: "Goblin combines fantasy and romance in a tale of an immortal being seeking release."
    },
    {
        id: 11,
        title: "Descendants of the Sun",
        category: "Kdrama",
        year: 2016,
        image: "https://image.tmdb.org/t/p/w500/rXhFdKbJYqLqLqLqLqLqLqLqLqL.jpg",
        description: "A love story between a soldier and a doctor unfolds against the backdrop of war-torn nations.",
        themes: "Duty, Love, Heroism, Sacrifice",
        director: "Lee Eung-bok",
        rating: 0,
        preview: "Descendants of the Sun captures the tension between duty and love in dangerous circumstances."
    },
    {
        id: 12,
        title: "Itaewon Class",
        category: "Kdrama",
        year: 2020,
        image: "https://image.tmdb.org/t/p/w500/sKqLqLqLqLqLqLqLqLqLqLqLqLq.jpg",
        description: "An ex-convict opens a bar-restaurant to seek revenge on the food company that destroyed his family.",
        themes: "Revenge, Ambition, Justice, Entrepreneurship",
        director: "Kim Sung-yoon",
        rating: 0,
        preview: "Itaewon Class is an inspiring story of revenge and redemption through entrepreneurship."
    },
    {
        id: 13,
        title: "The Wedding Party",
        category: "Nollywood",
        year: 2016,
        image: "https://image.tmdb.org/t/p/w500/wP8LqLqLqLqLqLqLqLqLqLqLqLq.jpg",
        description: "A lavish wedding day descends into chaos as families clash and secrets are revealed.",
        themes: "Family, Culture, Love, Comedy",
        director: "Kemi Adetiba",
        rating: 0,
        preview: "The Wedding Party became Nigeria's highest-grossing film at its release."
    },
    {
        id: 14,
        title: "Lionheart",
        category: "Nollywood",
        year: 2018,
        image: "https://image.tmdb.org/t/p/w500/lH8LqLqLqLqLqLqLqLqLqLqLqLq.jpg",
        description: "A woman takes over her father's transport company and fights to prove herself in a male-dominated industry.",
        themes: "Leadership, Gender Equality, Family Business, Tradition",
        director: "Genevieve Nnaji",
        rating: 0,
        preview: "Lionheart addresses gender inequality in corporate Nigeria while celebrating family legacy."
    },
    {
        id: 15,
        title: "King of Boys",
        category: "Nollywood",
        year: 2018,
        image: "https://image.tmdb.org/t/p/w500/kB8LqLqLqLqLqLqLqLqLqLqLqLq.jpg",
        description: "A businesswoman and politician becomes entangled in a dangerous power struggle with a young soldier.",
        themes: "Power, Politics, Ambition, Survival",
        director: "Kemi Adetiba",
        rating: 0,
        preview: "King of Boys is a gripping political thriller that examines power dynamics in Nigeria."
    },
    {
        id: 16,
        title: "Half of a Yellow Sun",
        category: "Nollywood",
        year: 2013,
        image: "https://image.tmdb.org/t/p/w500/hY8LqLqLqLqLqLqLqLqLqLqLqLq.jpg",
        description: "Sisters' lives are upended by the Nigerian Civil War in this adaptation of Chimamanda Ngozi Adichie's novel.",
        themes: "War, Love, Identity, Nigerian History",
        director: "Biyi Bandele",
        rating: 0,
        preview: "Half of a Yellow Sun brings to life the Biafran War through intimate personal stories."
    },
    {
        id: 17,
        title: "The Lord of the Rings: The Fellowship of the Ring",
        category: "Fantasy",
        year: 2001,
        image: "https://image.tmdb.org/t/p/w500/6oom5QYQ2yQTMJIbnvbkBL9cHo6.jpg",
        description: "A young hobbit embarks on a quest to destroy a powerful ring before it falls into the hands of darkness.",
        themes: "Good vs Evil, Friendship, Courage, Destiny",
        director: "Peter Jackson",
        rating: 0,
        preview: "The Fellowship of the Ring is an epic fantasy adventure that redefined the genre."
    },
    {
        id: 18,
        title: "Harry Potter and the Sorcerer's Stone",
        category: "Fantasy",
        year: 2001,
        image: "https://image.tmdb.org/t/p/w500/wuMc08IPKEatf9rnMNXvIDxqP4W.jpg",
        description: "A young boy discovers he is a wizard and begins his magical education at Hogwarts School.",
        themes: "Magic, Friendship, Identity, Good vs Evil",
        director: "Chris Columbus",
        rating: 0,
        preview: "The Sorcerer's Stone introduces audiences to the magical world of Harry Potter."
    },
    {
        id: 19,
        title: "Pan's Labyrinth",
        category: "Fantasy",
        year: 2006,
        image: "https://image.tmdb.org/t/p/w500/9jOJ6pPqLqLqLqLqLqLqLqLqLq.jpg",
        description: "A young girl escapes into a dark fairy tale world while facing the horrors of post-Civil War Spain.",
        themes: "Fantasy vs Reality, Innocence, War, Rebellion",
        director: "Guillermo del Toro",
        rating: 0,
        preview: "Pan's Labyrinth masterfully blends dark fantasy with historical drama."
    },
    {
        id: 20,
        title: "The Chronicles of Narnia: The Lion, the Witch and the Wardrobe",
        category: "Fantasy",
        year: 2005,
        image: "https://image.tmdb.org/t/p/w500/iEuaOQdVqLqLqLqLqLqLqLqLqL.jpg",
        description: "Four siblings discover a magical land through a wardrobe and must help defeat an evil witch.",
        themes: "Faith, Courage, Sacrifice, Family",
        director: "Andrew Adamson",
        rating: 0,
        preview: "The Lion, the Witch and the Wardrobe brings C.S. Lewis's beloved novel to life."
    }
];

// Get movie ID from URL
const urlParams = new URLSearchParams(window.location.search);
const movieId = parseInt(urlParams.get('id'));

// DOM Elements
const movieDetailContent = document.getElementById('movie-detail-content');
const commentForm = document.getElementById('comment-form');
const commentsContainer = document.getElementById('comments-container');

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    if (!movieId) {
        window.location.href = 'movies.html';
        return;
    }
    
    const movie = moviesData.find(m => m.id === movieId);
    if (!movie) {
        window.location.href = 'movies.html';
        return;
    }
    
    renderMovieDetail(movie);
    loadComments(movieId);
    setupEventListeners(movieId);
});

// Render Movie Detail
function renderMovieDetail(movie) {
    const stars = [1, 2, 3, 4, 5].map(num => {
        return `<span class="star" data-rating="${num}">${num <= movie.rating ? '★' : '☆'}</span>`;
    }).join('');
    
    movieDetailContent.innerHTML = `
        <div class="movie-detail-header">
            <img src="${movie.image}" alt="${movie.title}" class="movie-detail-poster" onerror="this.src='data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 300 400%22><rect fill=%22%231a1a1a%22 width=%22300%22 height=%22400%22/><text x=%2250%%22 y=%2250%%22 fill=%22%23666%22 text-anchor=%22middle%22 font-size=%2240%22>🎬</text></svg>'">
            <div class="movie-detail-info">
                <h1>${movie.title}</h1>
                <div class="movie-detail-meta">
                    <span class="category-badge">${movie.category}</span>
                    <span>📅 ${movie.year}</span>
                    <span>🎬 ${movie.director}</span>
                </div>
                <p class="movie-detail-description">${movie.description}</p>
                <div class="movie-detail-themes">
                    <h3>Key Themes</h3>
                    <p>${movie.themes}</p>
                </div>
                <div class="movie-detail-rating" data-movie-id="${movie.id}">
                    <h3>Your Rating:</h3>
                    <div class="stars">
                        ${stars}
                    </div>
                    <span class="rating-value">${movie.rating > 0 ? movie.rating + '/5' : 'Not rated'}</span>
                </div>
            </div>
        </div>
        <div class="movie-explanation">
            <h2>📖 Movie Analysis & Learning</h2>
            <p>${movie.preview}</p>
            <br>
            <p>This film offers valuable insights into ${movie.themes.toLowerCase()}. Understanding these elements will deepen your appreciation of cinema and help you analyze storytelling techniques used by filmmakers. Pay attention to the character development, cinematography, and narrative structure as you watch.</p>
        </div>
    `;
    
    // Add star click events
    document.querySelectorAll('.movie-detail-rating .star').forEach(star => {
        star.addEventListener('click', () => {
            const rating = parseInt(star.dataset.rating);
            rateMovie(movie.id, rating);
        });
    });
}

// Rate Movie
function rateMovie(movieId, rating) {
    const movie = moviesData.find(m => m.id === movieId);
    if (movie) {
        movie.rating = rating;
        saveRatings();
        renderMovieDetail(movie);
    }
}

// Save Ratings
function saveRatings() {
    const ratings = {};
    moviesData.forEach(movie => {
        if (movie.rating > 0) {
            ratings[movie.id] = movie.rating;
        }
    });
    localStorage.setItem('movieRatings', JSON.stringify(ratings));
}

// Load Ratings
function loadRatings() {
    const ratings = JSON.parse(localStorage.getItem('movieRatings')) || {};
    moviesData.forEach(movie => {
        if (ratings[movie.id]) {
            movie.rating = ratings[movie.id];
        }
    });
}

// Load Comments
function loadComments(movieId) {
    const comments = JSON.parse(localStorage.getItem(`comments_${movieId}`)) || [];
    
    if (comments.length === 0) {
        commentsContainer.innerHTML = '<p class="no-comments">No comments yet. Be the first to share your thoughts!</p>';
        return;
    }
    
    commentsContainer.innerHTML = comments.map(comment => `
        <div class="comment-card">
            <div class="comment-header">
                <span class="comment-author">${comment.name}</span>
                <span class="comment-date">${comment.date}</span>
            </div>
            <p class="comment-text">${comment.text}</p>
        </div>
    `).join('');
}

// Add Comment
function addComment(movieId, name, text) {
    const comments = JSON.parse(localStorage.getItem(`comments_${movieId}`)) || [];
    const newComment = {
        name: name,
        text: text,
        date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })
    };
    comments.unshift(newComment);
    localStorage.setItem(`comments_${movieId}`, JSON.stringify(comments));
    loadComments(movieId);
}

// Setup Event Listeners
function setupEventListeners(movieId) {
    commentForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('comment-name').value.trim();
        const text = document.getElementById('comment-text').value.trim();
        
        if (name && text) {
            addComment(movieId, name, text);
            commentForm.reset();
        }
    });
}

// Load ratings on init
loadRatings();
