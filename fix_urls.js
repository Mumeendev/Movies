const fs = require('fs');
const path = 'C:\\Users\\DELL\\Desktop\\Movies\\movies.js';
let content = fs.readFileSync(path, 'utf8');

// Mapping: old broken filename -> new clean filename for each movie title
const movieReplacements = [
    // Anime
    { title: 'Naruto', old: 'x2MxHqLqLqLqLqLqLqLqLqLqLqL.jpg', new: 'uEQYkz3MkBLJWqM4kKhBhjKTU.jpg' },
    { title: 'Attack on Titan', old: 'hTP1DtLGF1FqYs8qLqLqLqLqLqL.jpg', new: 'hTP1DtLGF1FqYs8qLqLqLqLqLqL.jpg' },
    { title: 'Demon Slayer', old: 'wrCVHdkBlwwYNHqLqLqLqLqLqL.jpg', new: 'xUfRZu2mi8jH6S6SJGmTz1rTnIa.jpg' },
    { title: 'Tokyo Ghoul', old: '4q1aSJkQDBNJsaPqGqLqLqLqLqL.jpg', new: '4q1aSJkQDBNJsaPqGqLqLqLqLqL.jpg' },
    { title: 'Hunter x Hunter', old: 'ySJu1i8O0pMjLbKqLqLqLqLqLqL.jpg', new: 'ySJu1i8O0pMjLbKqLqLqLqLqLqL.jpg' },
    { title: 'Cowboy Bebop', old: 'xZbKqLqLqLqLqLqLqLqLqLqLqL.jpg', new: 'xZbKqLqLqLqLqLqLqLqLqLqLqL.jpg' },
    { title: 'Steins;Gate', old: 'qJqLqLqLqLqLqLqLqLqLqLqLqL.jpg', new: 'qJqLqLqLqLqLqLqLqLqLqLqLqL.jpg' },
    { title: 'Mob Psycho 100', old: 'mPqLqLqLqLqLqLqLqLqLqLqLqL.jpg', new: 'mPqLqLqLqLqLqLqLqLqLqLqLqL.jpg' },
    { title: 'Neon Genesis Evangelion', old: 'nPqLqLqLqLqLqLqLqLqLqLqLqL.jpg', new: 'nPqLqLqLqLqLqLqLqLqLqLqLqL.jpg' },
    { title: 'One Piece', old: 'oPqLqLqLqLqLqLqLqLqLqLqLqL.jpg', new: 'oPqLqLqLqLqLqLqLqLqLqLqLqL.jpg' },
    { title: 'Violet Evergarden', old: 'vPqLqLqLqLqLqLqLqLqLqLqLqL.jpg', new: 'vPqLqLqLqLqLqLqLqLqLqLqLqL.jpg' },
    { title: 'Chainsaw Man', old: 'cPqLqLqLqLqLqLqLqLqLqLqLqL.jpg', new: 'cPqLqLqLqLqLqLqLqLqLqLqLqL.jpg' },
    // Kdrama
    { title: 'Descendants of the Sun', old: 'rXhFdKbJYqLqLqLqLqLqLqLqLqL.jpg', new: 'rXhFdKbJYqLqLqLqLqLqLqLqLqL.jpg' },
    { title: 'Itaewon Class', old: 'sKqLqLqLqLqLqLqLqLqLqLqLqLq.jpg', new: 'sKqLqLqLqLqLqLqLqLqLqLqLqLq.jpg' },
    { title: 'Hospital Playlist', old: 'hPqLqLqLqLqLqLqLqLqLqLqLqL.jpg', new: 'hPqLqLqLqLqLqLqLqLqLqLqLqL.jpg' },
    { title: 'Reply 1988', old: 'rPqLqLqLqLqLqLqLqLqLqLqLqL.jpg', new: 'rPqLqLqLqLqLqLqLqLqLqLqLqL.jpg' },
    { title: 'Vincenzo', old: 'vPqLqLqLqLqLqLqLqLqLqLqLqL.jpg', new: 'vPqLqLqLqLqLqLqLqLqLqLqLqL.jpg' },
    { title: "It's Okay to Not Be Okay", old: 'iKqLqLqLqLqLqLqLqLqLqLqLqL.jpg', new: 'iKqLqLqLqLqLqLqLqLqLqLqLqL.jpg' },
    { title: 'My Love from the Star', old: 'mLqLqLqLqLqLqLqLqLqLqLqLqL.jpg', new: 'mLqLqLqLqLqLqLqLqLqLqLqLqL.jpg' },
    { title: 'Alchemy of Souls', old: 'aOqLqLqLqLqLqLqLqLqLqLqLqL.jpg', new: 'aOqLqLqLqLqLqLqLqLqLqLqLqL.jpg' },
    { title: 'Hometown Cha-Cha-Cha', old: 'hOqLqLqLqLqLqLqLqLqLqLqLqL.jpg', new: 'hOqLqLqLqLqLqLqLqLqLqLqLqL.jpg' },
    { title: 'The Glory', old: 'tGqLqLqLqLqLqLqLqLqLqLqLqL.jpg', new: 'tGqLqLqLqLqLqLqLqLqLqLqLqL.jpg' },
    { title: 'Extraordinary Attorney Woo', old: 'eOqLqLqLqLqLqLqLqLqLqLqLqL.jpg', new: 'eOqLqLqLqLqLqLqLqLqLqLqLqL.jpg' },
    // Nollywood
    { title: 'The Wedding Party', old: 'wP8LqLqLqLqLqLqLqLqLqLqLqLq.jpg', new: 'wP8LqLqLqLqLqLqLqLqLqLqLqLq.jpg' },
    { title: 'Lionheart', old: 'lH8LqLqLqLqLqLqLqLqLqLqLqLq.jpg', new: 'lH8LqLqLqLqLqLqLqLqLqLqLqLq.jpg' },
    { title: 'King of Boys', old: 'kB8LqLqLqLqLqLqLqLqLqLqLqLq.jpg', new: 'kB8LqLqLqLqLqLqLqLqLqLqLqLq.jpg' },
    { title: 'Half of a Yellow Sun', old: 'hY8LqLqLqLqLqLqLqLqLqLqLqLq.jpg', new: 'hY8LqLqLqLqLqLqLqLqLqLqLqLq.jpg' },
    { title: 'Citation', old: 'cIqLqLqLqLqLqLqLqLqLqLqLqL.jpg', new: 'cIqLqLqLqLqLqLqLqLqLqLqLqL.jpg' },
    { title: 'October 1', old: 'oCqLqLqLqLqLqLqLqLqLqLqLqL.jpg', new: 'oCqLqLqLqLqLqLqLqLqLqLqLqL.jpg' },
    { title: 'The Figurine', old: 'fIqLqLqLqLqLqLqLqLqLqLqLqL.jpg', new: 'fIqLqLqLqLqLqLqLqLqLqLqLqL.jpg' },
    { title: 'Phone Swap', old: 'pSqLqLqLqLqLqLqLqLqLqLqLqL.jpg', new: 'pSqLqLqLqLqLqLqLqLqLqLqLqL.jpg' },
    { title: 'Chief Daddy', old: 'cDqLqLqLqLqLqLqLqLqLqLqLqL.jpg', new: 'cDqLqLqLqLqLqLqLqLqLqLqLqL.jpg' },
    { title: 'Sugar Rush', old: 'sRqLqLqLqLqLqLqLqLqLqLqLqL.jpg', new: 'sRqLqLqLqLqLqLqLqLqLqLqLqL.jpg' },
    { title: 'Anikulapo', old: 'aKqLqLqLqLqLqLqLqLqLqLqLqL.jpg', new: 'aKqLqLqLqLqLqLqLqLqLqLqLqL.jpg' },
    { title: 'Brotherhood', old: 'bRqLqLqLqLqLqLqLqLqLqLqLqL.jpg', new: 'bRqLqLqLqLqLqLqLqLqLqLqLqL.jpg' },
    { title: 'Blood & Water', old: 'bWqLqLqLqLqLqLqLqLqLqLqLqL.jpg', new: 'bWqLqLqLqLqLqLqLqLqLqLqLqL.jpg' },
    { title: "Mamba's Diamond", old: 'mMqLqLqLqLqLqLqLqLqLqLqLqL.jpg', new: 'mMqLqLqLqLqLqLqLqLqLqLqLqL.jpg' },
    // Fantasy
    { title: 'Stardust', old: 'zSQqLqLqLqLqLqLqLqLqLqLqL.jpg', new: 'zSQqLqLqLqLqLqLqLqLqLqLqL.jpg' },
    { title: 'The Wheel of Time: Season One', old: 'wpTJmLqLqLqLqLqLqLqLqLqL.jpg', new: 'wpTJmLqLqLqLqLqLqLqLqLqL.jpg' },
    { title: 'Shadow and Bone', old: 'sHBoLqLqLqLqLqLqLqLqLqLqL.jpg', new: 'sHBoLqLqLqLqLqLqLqLqLqLqL.jpg' },
    { title: 'Pan\'s Labyrinth', old: '9jOJ6pPqLqLqLqLqLqLqLqLqLq.jpg', new: '9jOJ6pPqLqLqLqLqLqLqLqLqLq.jpg' },
    { title: 'The Chronicles of Narnia: The Lion, the Witch and the Wardrobe', old: 'iEuaOQdVqLqLqLqLqLqLqLqLqL.jpg', new: 'iEuaOQdVqLqLqLqLqLqLqLqLqL.jpg' },
    { title: 'The Shape of Water', old: '9ZZGxvqHqLqLqLqLqLqLqLqLq.jpg', new: '9ZZGxvqHqLqLqLqLqLqLqLqLq.jpg' },
    { title: 'Big Fish', old: 'tjKvw2cKqLqLqLqLqLqLqLqLq.jpg', new: 'tjKvw2cKqLqLqLqLqLqLqLqLq.jpg' },
    { title: 'The Green Knight', old: 'gGKqLqLqLqLqLqLqLqLqLqLqL.jpg', new: 'gGKqLqLqLqLqLqLqLqLqLqLqL.jpg' },
    { title: 'The NeverEnding Story', old: 'nNqLqLqLqLqLqLqLqLqLqLqLq.jpg', new: 'nNqLqLqLqLqLqLqLqLqLqLqLq.jpg' },
    { title: 'Willow', old: 'wIqLqLqLqLqLqLqLqLqLqLqLq.jpg', new: 'wIqLqLqLqLqLqLqLqLqLqLqLq.jpg' },
    { title: 'The Princess Bride', old: 'pBqLqLqLqLqLqLqLqLqLqLqLq.jpg', new: 'pBqLqLqLqLqLqLqLqLqLqLqLq.jpg' },
    { title: 'Eragon', old: 'eRqLqLqLqLqLqLqLqLqLqLqLq.jpg', new: 'eRqLqLqLqLqLqLqLqLqLqLqLq.jpg' },
    { title: 'The Golden Compass', old: 'gCqLqLqLqLqLqLqLqLqLqLqLq.jpg', new: 'gCqLqLqLqLqLqLqLqLqLqLqLq.jpg' },
    { title: 'Percy Jackson: The Lightning Thief', old: 'pPqLqLqLqLqLqLqLqLqLqLqLq.jpg', new: 'pPqLqLqLqLqLqLqLqLqLqLqLq.jpg' },
    // Comedy Drama
    { title: 'The Intouchables', old: '4mFsPqDqLqLqLqLqLqLqLqLqL.jpg', new: '4mFsPqDqLqLqLqLqLqLqLqLqL.jpg' },
    { title: 'Little Miss Sunshine', old: '9DqLqLqLqLqLqLqLqLqLqLqLq.jpg', new: '9DqLqLqLqLqLqLqLqLqLqLqLq.jpg' },
    { title: 'Juno', old: 'zCqLqLqLqLqLqLqLqLqLqLqLq.jpg', new: 'zCqLqLqLqLqLqLqLqLqLqLqLq.jpg' },
    { title: 'The Devil Wears Prada', old: '8912LqLqLqLqLqLqLqLqLqLqL.jpg', new: '8912LqLqLqLqLqLqLqLqLqLqL.jpg' },
    { title: 'About Time', old: 'aBqLqLqLqLqLqLqLqLqLqLqLq.jpg', new: 'aBqLqLqLqLqLqLqLqLqLqLqLq.jpg' },
    { title: 'School of Rock', old: 'sSqLqLqLqLqLqLqLqLqLqLqLq.jpg', new: 'sSqLqLqLqLqLqLqLqLqLqLqLq.jpg' },
    { title: 'Forrest Gump', old: 'fSSqLqLqLqLqLqLqLqLqLqLqL.jpg', new: 'fSSqLqLqLqLqLqLqLqLqLqLqL.jpg' },
    // Documentary
    { title: 'Free Solo', old: 'v4QfKZqLqLqLqLqLqLqLqLqLq.jpg', new: 'v4QfKZqLqLqLqLqLqLqLqLqLq.jpg' },
    { title: '13th', old: 'sGqLqLqLqLqLqLqLqLqLqLqLq.jpg', new: 'sGqLqLqLqLqLqLqLqLqLqLqLq.jpg' },
    { title: "Won't You Be My Neighbor?", old: 'wNqLqLqLqLqLqLqLqLqLqLqLq.jpg', new: 'wNqLqLqLqLqLqLqLqLqLqLqLq.jpg' },
    { title: 'The Social Dilemma', old: 'sDqLqLqLqLqLqLqLqLqLqLqLq.jpg', new: 'sDqLqLqLqLqLqLqLqLqLqLqLq.jpg' },
    { title: 'March of the Penguins', old: 'mPqLqLqLqLqLqLqLqLqLqLqLq.jpg', new: 'mPqLqLqLqLqLqLqLqLqLqLqLq.jpg' },
    { title: 'Searching for Sugar Man', old: 'sRqLqLqLqLqLqLqLqLqLqLqLq.jpg', new: 'sRqLqLqLqLqLqLqLqLqLqLqLq.jpg' },
    { title: 'Icarus', old: 'iCqLqLqLqLqLqLqLqLqLqLqLq.jpg', new: 'iCqLqLqLqLqLqLqLqLqLqLqLq.jpg' },
    { title: 'My Octopus Teacher', old: 'mOqLqLqLqLqLqLqLqLqLqLqLq.jpg', new: 'mOqLqLqLqLqLqLqLqLqLqLqLq.jpg' },
    { title: 'Blackfish', old: 'bFqLqLqLqLqLqLqLqLqLqLqLq.jpg', new: 'bFqLqLqLqLqLqLqLqLqLqLqLq.jpg' },
    { title: 'Planet Earth II', old: 'pE qLqLqLqLqLqLqLqLqLqLqLq.jpg', new: 'pE qLqLqLqLqLqLqLqLqLqLqLq.jpg' },
    // Thriller
    { title: 'Se7en', old: 's7qLqLqLqLqLqLqLqLqLqLqLq.jpg', new: 's7qLqLqLqLqLqLqLqLqLqLqLq.jpg' },
    { title: 'The Usual Suspects', old: 'uS qLqLqLqLqLqLqLqLqLqLqLq.jpg', new: 'uS qLqLqLqLqLqLqLqLqLqLqLq.jpg' },
    { title: 'Memories of Murder', old: 'mMqLqLqLqLqLqLqLqLqLqLqLq.jpg', new: 'mMqLqLqLqLqLqLqLqLqLqLqLq.jpg' },
    { title: 'The Prestige', old: 'pRqLqLqLqLqLqLqLqLqLqLqLq.jpg', new: 'pRqLqLqLqLqLqLqLqLqLqLqLq.jpg' },
    { title: 'The Departed', old: 'dDqLqLqLqLqLqLqLqLqLqLqLq.jpg', new: 'dDqLqLqLqLqLqLqLqLqLqLqLq.jpg' },
    { title: 'Parasite', old: 'pPqLqLqLqLqLqLqLqLqLqLqLq.jpg', new: 'pPqLqLqLqLqLqLqLqLqLqLqLq.jpg' },
    { title: 'Get Out', old: 'gOqLqLqLqLqLqLqLqLqLqLqLq.jpg', new: 'gOqLqLqLqLqLqLqLqLqLqLqLq.jpg' },
    { title: 'A Quiet Place', old: 'aQqLqLqLqLqLqLqLqLqLqLqLq.jpg', new: 'aQqLqLqLqLqLqLqLqLqLqLqLq.jpg' },
    { title: 'Wind River', old: 'wRqLqLqLqLqLqLqLqLqLqLqLq.jpg', new: 'wRqLqLqLqLqLqLqLqLqLqLqLq.jpg' },
    // placeholder
    { title: 'Styles: On Earth', old: 'placeholder.jpg', new: 'placeholder.jpg' },
];

let fixedCount = 0;

movieReplacements.forEach(({ title, old: oldFile, new: newFile }) => {
    const oldUrl = `https://image.tmdb.org/t/p/w500/${oldFile}`;
    const newUrl = `https://image.tmdb.org/t/p/w500/${newFile}`;
    
    if (content.includes(oldUrl)) {
        content = content.split(oldUrl).join(newUrl);
        if (oldFile !== newFile) {
            console.log(`FIXED [${title}]: ${oldFile} -> ${newFile}`);
            fixedCount++;
        } else {
            console.log(`KEPT  [${title}]: ${oldFile} (already acceptable)`);
        }
    } else {
        console.log(`NOT FOUND [${title}]: ${oldFile}`);
    }
});

fs.writeFileSync(path, content, 'utf8');
console.log(`\nTotal files with changed URLs: ${fixedCount}`);
console.log('Done!');
