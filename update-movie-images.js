/**
 * Update movies.js and movie-detail.js with TVMaze images
 */

const fs = require('fs');
const path = require('path');

// TVMaze image mapping (from the fetch results)
const tvmazeImages = {
    "Akira": "https://static.tvmaze.com/uploads/images/original_untouched/300/751059.jpg",
    "Jujutsu Kaisen": "https://static.tvmaze.com/uploads/images/original_untouched/608/1521905.jpg",
    "Naruto": "https://static.tvmaze.com/uploads/images/original_untouched/3/9744.jpg",
    "Attack on Titan": "https://static.tvmaze.com/uploads/images/original_untouched/476/1191684.jpg",
    "Demon Slayer": "https://static.tvmaze.com/uploads/images/original_untouched/456/1140750.jpg",
    "Fullmetal Alchemist: Brotherhood": "https://static.tvmaze.com/uploads/images/original_untouched/485/1214095.jpg",
    "Fullmetal Alchemist Brotherhood": "https://static.tvmaze.com/uploads/images/original_untouched/485/1214095.jpg",
    "Death Note": "https://static.tvmaze.com/uploads/images/original_untouched/499/1249019.jpg",
    "One Punch Man": "https://static.tvmaze.com/uploads/images/original_untouched/598/1496471.jpg",
    "Tokyo Ghoul": "https://static.tvmaze.com/uploads/images/original_untouched/604/1510953.jpg",
    "My Hero Academia": "https://static.tvmaze.com/uploads/images/original_untouched/599/1499141.jpg",
    "Sword Art Online": "https://static.tvmaze.com/uploads/images/original_untouched/573/1434479.jpg",
    "Hunter x Hunter": "https://static.tvmaze.com/uploads/images/original_untouched/223/559165.jpg",
    "Cowboy Bebop": "https://static.tvmaze.com/uploads/images/original_untouched/178/446548.jpg",
    "Steins;Gate": "https://static.tvmaze.com/uploads/images/original_untouched/373/933178.jpg",
    "Steins Gate": "https://static.tvmaze.com/uploads/images/original_untouched/373/933178.jpg",
    "Mob Psycho 100": "https://static.tvmaze.com/uploads/images/original_untouched/508/1270187.jpg",
    "Neon Genesis Evangelion": "https://static.tvmaze.com/uploads/images/original_untouched/11/27792.jpg",
    "One Piece": "https://static.tvmaze.com/uploads/images/original_untouched/504/1262497.jpg",
    "Violet Evergarden": "https://static.tvmaze.com/uploads/images/original_untouched/504/1261954.jpg",
    "Chainsaw Man": "https://static.tvmaze.com/uploads/images/original_untouched/422/1056726.jpg",
    "Crash Landing on You": "https://static.tvmaze.com/uploads/images/original_untouched/235/588087.jpg",
    "Goblin: The Lonely and Great God": "https://static.tvmaze.com/uploads/images/original_untouched/532/1330901.jpg",
    "Guardian The Lonely and Great God": "https://static.tvmaze.com/uploads/images/original_untouched/532/1330901.jpg",
    "Descendants of the Sun": "https://static.tvmaze.com/uploads/images/original_untouched/46/115575.jpg",
    "Itaewon Class": "https://static.tvmaze.com/uploads/images/original_untouched/236/591651.jpg",
    "Squid Game": "https://static.tvmaze.com/uploads/images/original_untouched/576/1440521.jpg",
    "Hospital Playlist": "https://static.tvmaze.com/uploads/images/original_untouched/323/807792.jpg",
    "Reply 1988": "https://static.tvmaze.com/uploads/images/original_untouched/27/67574.jpg",
    "Vincenzo": "https://static.tvmaze.com/uploads/images/original_untouched/481/1202670.jpg",
    "It's Okay to Not Be Okay": "https://static.tvmaze.com/uploads/images/original_untouched/260/651608.jpg",
    "Its Okay to Not Be Okay": "https://static.tvmaze.com/uploads/images/original_untouched/260/651608.jpg",
    "My Love from the Star": "https://static.tvmaze.com/uploads/images/original_untouched/18/47470.jpg",
    "Alchemy of Souls": "https://static.tvmaze.com/uploads/images/original_untouched/609/1523773.jpg",
    "Hometown Cha-Cha-Cha": "https://static.tvmaze.com/uploads/images/original_untouched/609/1523777.jpg",
    "Lionheart": "https://static.tvmaze.com/uploads/images/original_untouched/481/1204395.jpg",
    "King of Boys": "https://static.tvmaze.com/uploads/images/original_untouched/352/880119.jpg"
};

function updateFile(filePath) {
    console.log(`\n📝 Updating: ${filePath}`);
    
    let content = fs.readFileSync(filePath, 'utf8');
    let updateCount = 0;
    
    // Replace image URLs for each movie
    for (const [title, imageUrl] of Object.entries(tvmazeImages)) {
        // Match the image property in the movie objects
        // Pattern: image: "anything" where the title matches
        const escapedTitle = title.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        
        // Find lines with this title and update the image URL on nearby lines
        const titlePattern = new RegExp(`(title:\\s*["']${escapedTitle}["'][\\s\\S]*?image:\\s*")[^"]+(")`, 'gi');
        
        if (content.match(titlePattern)) {
            content = content.replace(titlePattern, `$1${imageUrl}$2`);
            updateCount++;
            console.log(`  ✅ Updated: ${title}`);
        } else {
            // Try alternate pattern - image might be before title
            const altPattern = new RegExp(`(image:\\s*")[^"]+(")([\\s\\S]*?title:\\s*["']${escapedTitle}["'])`, 'gi');
            if (content.match(altPattern)) {
                content = content.replace(altPattern, `$1${imageUrl}$2$3`);
                updateCount++;
                console.log(`  ✅ Updated (alt): ${title}`);
            } else {
                console.log(`  ⚠️  Not found: ${title}`);
            }
        }
    }
    
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`  📊 Total updates: ${updateCount}`);
}

// Update both files
updateFile(path.join(__dirname, 'movies.js'));
updateFile(path.join(__dirname, 'movie-detail.js'));

console.log('\n✅ All files updated successfully!');
console.log('💡 Note: Movies without TVMaze images will use the fallback system');
