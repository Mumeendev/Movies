/**
 * Image Fallback Handler for MovieLearn
 * Automatically replaces broken movie images with attractive gradient posters
 */

// Call this on image error: onerror="handleMovieImageError(this, 'Movie Title')"
function handleMovieImageError(img, title) {
    img.onerror = null;
    img.style.display = 'none';
    
    // Hide the parent movie-poster container's ::after pseudo-element
    img.parentNode.style.overflow = 'hidden';
    
    // Create fallback element with varied colors
    const colors = [
        ['#e50914', '#b20710'],  // Red (Netflix)
        ['#667eea', '#764ba2'],  // Purple
        ['#f093fb', '#f5576c'],  // Pink
        ['#4facfe', '#00f2fe'],  // Blue
        ['#43e97b', '#38f9d7'],  // Green
        ['#fa709a', '#fee140'],  // Orange-Pink
        ['#a8edea', '#fed6e3'],  // Mint
        ['#ff9a9e', '#fecfef'],  // Rose
        ['#ffecd2', '#fcb69f'],  // Peach
        ['#ff8a80', '#ff5252']   // Red variant
    ];
    
    // Use title first char to deterministically pick a color
    const charCode = title ? title.charCodeAt(0) : 0;
    const colorPair = colors[charCode % colors.length];
    
    // Create fallback element
    const fallback = document.createElement('div');
    fallback.className = 'poster-fallback-dynamic';
    fallback.style.background = `linear-gradient(135deg, ${colorPair[0]} 0%, ${colorPair[1]} 50%, #0a0a0a 100%)`;
    fallback.innerHTML = `
        <div class="fallback-initial">${title ? title.charAt(0).toUpperCase() : '🎬'}</div>
        <div class="fallback-title">${title || 'Movie'}</div>
    `;
    
    // Clear the image's parent and add fallback
    const posterContainer = img.parentNode;
    posterContainer.innerHTML = '';
    posterContainer.appendChild(fallback);
}

// Auto-initialize on DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
    // Add dynamic fallback styles if not already present
    if (!document.getElementById('dynamic-poster-styles')) {
        const style = document.createElement('style');
        style.id = 'dynamic-poster-styles';
        style.textContent = `
            .poster-fallback-dynamic {
                width: 100%;
                height: 100%;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                background: linear-gradient(135deg, #e50914 0%, #b20710 50%, #0a0a0a 100%);
                position: relative;
                overflow: hidden;
            }
            
            .poster-fallback-dynamic::before {
                content: '';
                position: absolute;
                top: -50%;
                left: -50%;
                width: 200%;
                height: 200%;
                background: radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%);
                animation: posterGlow 3s ease-in-out infinite;
            }
            
            @keyframes posterGlow {
                0%, 100% { transform: translate(0, 0); opacity: 0.5; }
                50% { transform: translate(10%, 10%); opacity: 0.8; }
            }
            
            .fallback-initial {
                font-size: 5rem;
                font-weight: bold;
                color: #fff;
                text-shadow: 0 4px 20px rgba(0,0,0,0.5);
                z-index: 1;
                animation: fadeInScale 0.5s ease-out;
            }
            
            .fallback-title {
                font-size: 0.9rem;
                color: rgba(255,255,255,0.9);
                text-align: center;
                padding: 0 1rem;
                margin-top: 0.5rem;
                z-index: 1;
                font-weight: 500;
                animation: fadeInScale 0.5s ease-out 0.2s both;
            }
            
            @keyframes fadeInScale {
                from { opacity: 0; transform: scale(0.8); }
                to { opacity: 1; transform: scale(1); }
            }
        `;
        document.head.appendChild(style);
    }
});
