/**
 * TVMaze API Image Fetcher
 * Fetches real poster images for all movies/TV shows using TVMaze API
 * TVMaze API: https://api.tvmaze.com/
 */

const fs = require('fs');
const path = require('path');

// TVMaze API endpoint
const TVMAZE_SEARCH_URL = 'https://api.tvmaze.com/search/shows?q=';

// List of all shows to fetch images for
const shows = [
    // Anime
    { title: "Spirited Away", year: 2001 },
    { title: "Your Name", year: 2016 },
    { title: "Princess Mononoke", year: 1997 },
    { title: "Akira", year: 1988 },
    { title: "Jujutsu Kaisen", year: 2020 },
    { title: "Naruto", year: 2002 },
    { title: "Attack on Titan", year: 2013 },
    { title: "Demon Slayer", year: 2019 },
    { title: "Fullmetal Alchemist Brotherhood", year: 2009 },
    { title: "Death Note", year: 2006 },
    { title: "One Punch Man", year: 2015 },
    { title: "Tokyo Ghoul", year: 2014 },
    { title: "My Hero Academia", year: 2016 },
    { title: "Sword Art Online", year: 2012 },
    { title: "Hunter x Hunter", year: 2011 },
    { title: "Cowboy Bebop", year: 1998 },
    { title: "Steins Gate", year: 2011 },
    { title: "Mob Psycho 100", year: 2016 },
    { title: "Neon Genesis Evangelion", year: 1995 },
    { title: "One Piece", year: 1999 },
    { title: "Violet Evergarden", year: 2018 },
    { title: "Chainsaw Man", year: 2022 },
    
    // Kdrama
    { title: "Crash Landing on You", year: 2019 },
    { title: "Guardian The Lonely and Great God", year: 2016 },
    { title: "Descendants of the Sun", year: 2016 },
    { title: "Itaewon Class", year: 2020 },
    { title: "Squid Game", year: 2021 },
    { title: "Hospital Playlist", year: 2020 },
    { title: "Reply 1988", year: 2015 },
    { title: "Vincenzo", year: 2021 },
    { title: "Its Okay to Not Be Okay", year: 2020 },
    { title: "My Love from the Star", year: 2013 },
    { title: "Alchemy of Souls", year: 2022 },
    { title: "Hometown Cha-Cha-Cha", year: 2021 },
    
    // Nollywood
    { title: "The Wedding Party", year: 2016 },
    { title: "Lionheart", year: 2018 },
    { title: "King of Boys", year: 2018 },
    { title: "Half of a Yellow Sun", year: 2013 },
];

// Store results
const imageResults = {};

// Sleep function for rate limiting
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// Fetch image for a single show from TVMaze
async function fetchShowImage(show) {
    try {
        const searchQuery = encodeURIComponent(show.title);
        const response = await fetch(`${TVMAZE_SEARCH_URL}${searchQuery}`);
        
        if (!response.ok) {
            console.log(`⚠️  Failed to search for "${show.title}": ${response.status}`);
            return { title: show.title, image: null };
        }
        
        const data = await response.json();
        
        if (data.length === 0) {
            console.log(`❌ Not found: "${show.title}"`);
            return { title: show.title, image: null };
        }
        
        // Find the best match by checking year and name
        let bestMatch = null;
        for (const item of data) {
            const showData = item.show;
            const matchYear = showData.premiered ? parseInt(showData.premiered.split('-')[0]) : null;
            
            // Check if title matches closely
            const titleMatch = showData.name.toLowerCase().includes(show.title.toLowerCase().split(' ')[0]) ||
                              show.title.toLowerCase().includes(showData.name.toLowerCase().split(' ')[0]);
            
            if (titleMatch && (!show.year || !matchYear || Math.abs(matchYear - show.year) <= 1)) {
                bestMatch = showData;
                break;
            }
        }
        
        // If no year match found, use first result
        if (!bestMatch && data.length > 0) {
            bestMatch = data[0].show;
        }
        
        if (bestMatch && bestMatch.image && bestMatch.image.original) {
            console.log(`✅ Found: "${show.title}" -> ${bestMatch.image.original}`);
            return { title: show.title, image: bestMatch.image.original, tvmazeId: bestMatch.id };
        } else {
            console.log(`⚠️  No image for: "${show.title}"`);
            return { title: show.title, image: null };
        }
    } catch (error) {
        console.error(`❌ Error fetching "${show.title}":`, error.message);
        return { title: show.title, image: null };
    }
}

// Main function to fetch all images
async function fetchAllImages() {
    console.log('🎬 Starting TVMaze image fetch...\n');
    
    for (let i = 0; i < shows.length; i++) {
        const show = shows[i];
        console.log(`[${i + 1}/${shows.length}] Fetching: "${show.title}" (${show.year})`);
        
        const result = await fetchShowImage(show);
        imageResults[show.title] = result;
        
        // Rate limiting - TVMaze allows ~10 requests per second
        if (i < shows.length - 1) {
            await sleep(150);
        }
    }
    
    console.log('\n🎉 Fetch complete!\n');
    
    // Print results summary
    let successCount = 0;
    let failCount = 0;
    
    console.log('\n📊 Results:');
    console.log('=' .repeat(80));
    
    for (const [title, result] of Object.entries(imageResults)) {
        if (result.image) {
            console.log(`✅ ${title}: ${result.image}`);
            successCount++;
        } else {
            console.log(`❌ ${title}: No image found`);
            failCount++;
        }
    }
    
    console.log('\n' + '=' .repeat(80));
    console.log(`\n📈 Summary: ${successCount} found, ${failCount} failed out of ${shows.length} shows`);
    
    // Save results to JSON file
    const outputPath = path.join(__dirname, 'tvmaze-images.json');
    fs.writeFileSync(outputPath, JSON.stringify(imageResults, null, 2), 'utf8');
    console.log(`\n💾 Results saved to: ${outputPath}`);
    
    // Generate JavaScript code for movies.js update
    generateUpdateScript();
}

// Generate update script with fetched images
function generateUpdateScript() {
    const updates = {};
    
    for (const [title, result] of Object.entries(imageResults)) {
        if (result.image) {
            updates[title] = result.image;
        }
    }
    
    const updateCode = `
// TVMaze Image URLs - Generated on ${new Date().toISOString()}
// Replace the image URLs in your movies.js with these TVMaze URLs

const tvmazeImageUpdates = ${JSON.stringify(updates, null, 4)};

// Usage: Update your movies array with these URLs
// The fallback system (image-fallback.js) will handle any broken URLs
`;
    
    const updatePath = path.join(__dirname, 'tvmaze-image-updates.js');
    fs.writeFileSync(updatePath, updateCode, 'utf8');
    console.log(`📝 Update script saved to: ${updatePath}`);
}

// Run the fetcher
fetchAllImages().catch(console.error);
