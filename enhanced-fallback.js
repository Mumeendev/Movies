/**
 * Enhanced Image Fallback System
 * Provides beautiful gradient posters for movies without TVMaze images
 */

// Movies that need fallback posters (not found on TVMaze)
const fallbackMovies = [
    "Spirited Away",
    "Your Name", 
    "Princess Mononoke",
    "The Wedding Party",
    "Half of a Yellow Sun"
];

// Color schemes for different categories
const colorSchemes = {
    "Anime": [
        ["#667eea", "#764ba2", "#f093fb"],  // Purple-pink gradient
        ["#4facfe", "#00f2fe", "#43e97b"],  // Blue-green gradient
        ["#fa709a", "#fee140", "#ff9a9e"],  // Pink-yellow gradient
    ],
    "Kdrama": [
        ["#a8edea", "#fed6e3", "#ffecd2"],  // Mint-peach gradient
        ["#ff9a9e", "#fecfef", "#fdfcfb"],  // Rose gradient
        ["#fbc2eb", "#a6c1ee", "#e0c3fc"],  // Lavender gradient
    ],
    "Nollywood": [
        ["#ffecd2", "#fcb69f", "#ff9a9e"],  // Warm gradient
        ["#a1c4fd", "#c2e9fb", "#d4fc79"],  // Sky gradient
        ["#f6d365", "#fda085", "#f093fb"],  // Sunset gradient
    ],
    "Drama": [
        ["#667eea", "#764ba2", "#667eea"],  // Deep purple
        ["#434343", "#000000", "#434343"],  // Dark gradient
    ],
    "default": [
        ["#e50914", "#b20710", "#0a0a0a"],  // Netflix red
        ["#667eea", "#764ba2", "#1a1a1a"],  // Purple dark
    ]
};

// Generate fallback poster for a movie
function generateFallbackPoster(movie) {
    const category = movie.category || "default";
    const schemes = colorSchemes[category] || colorSchemes.default;
    
    // Use title hash to deterministically pick a color scheme
    const titleHash = movie.title.split('').reduce((a, b) => {
        return ((a << 5) - a) + b.charCodeAt(0);
    }, 0);
    
    const schemeIndex = Math.abs(titleHash) % schemes.length;
    const colors = schemes[schemeIndex];
    
    return {
        background: `linear-gradient(135deg, ${colors[0]} 0%, ${colors[1]} 50%, ${colors[2] || colors[0]} 100%)`,
        initial: movie.title.charAt(0).toUpperCase(),
        title: movie.title
    };
}

// Apply fallback to broken images
function applyFallbackOnImageError(imgElement, movie) {
    imgElement.onerror = null; // Prevent infinite loop
    imgElement.style.display = 'none';
    
    const posterContainer = imgElement.parentNode;
    const fallback = generateFallbackPoster(movie);
    
    // Create fallback element
    const fallbackDiv = document.createElement('div');
    fallbackDiv.className = 'poster-fallback';
    fallbackDiv.style.background = fallback.background;
    fallbackDiv.innerHTML = `
        <div class="fallback-content">
            <div class="fallback-initial">${fallback.initial}</div>
            <div class="fallback-title">${fallback.title}</div>
        </div>
    `;
    
    // Clear existing content and add fallback
    posterContainer.innerHTML = '';
    posterContainer.appendChild(fallbackDiv);
}

// Add CSS styles for fallback posters
function addFallbackStyles() {
    if (document.getElementById('fallback-styles')) return;
    
    const style = document.createElement('style');
    style.id = 'fallback-styles';
    style.textContent = `
        .poster-fallback {
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;
            overflow: hidden;
            border-radius: 8px;
        }
        
        .poster-fallback::before {
            content: '';
            position: absolute;
            top: -50%;
            left: -50%;
            width: 200%;
            height: 200%;
            background: radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%);
            animation: fallbackGlow 3s ease-in-out infinite;
        }
        
        @keyframes fallbackGlow {
            0%, 100% { transform: translate(0, 0); opacity: 0.3; }
            50% { transform: translate(10%, 10%); opacity: 0.6; }
        }
        
        .fallback-content {
            display: flex;
            flex-direction: column;
            align-items: center;
            z-index: 1;
            padding: 1rem;
        }
        
        .fallback-initial {
            font-size: 4rem;
            font-weight: bold;
            color: rgba(255, 255, 255, 0.95);
            text-shadow: 0 4px 20px rgba(0,0,0,0.5);
            margin-bottom: 0.5rem;
            animation: fadeInScale 0.5s ease-out;
        }
        
        .fallback-title {
            font-size: 1rem;
            color: rgba(255, 255, 255, 0.9);
            text-align: center;
            font-weight: 600;
            text-shadow: 0 2px 10px rgba(0,0,0,0.5);
            animation: fadeInScale 0.5s ease-out 0.2s both;
        }
        
        @keyframes fadeInScale {
            from { 
                opacity: 0; 
                transform: scale(0.8); 
            }
            to { 
                opacity: 1; 
                transform: scale(1); 
            }
        }
        
        .movie-poster {
            position: relative;
            overflow: hidden;
        }
        
        .movie-poster img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            display: block;
        }
    `;
    
    document.head.appendChild(style);
}

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', () => {
    addFallbackStyles();
    console.log('✅ Enhanced image fallback system initialized');
});

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { generateFallbackPoster, applyFallbackOnImageError, fallbackMovies };
}
