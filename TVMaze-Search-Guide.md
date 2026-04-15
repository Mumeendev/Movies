# TVMaze API Search Integration - Complete Guide 🎬

## Overview
Your MovieLearn application now uses the **TVMaze API** (https://api.tvmaze.com/) for enhanced search functionality. Users can search for ANY movie or TV show, not just the ones in your local database!

## ✨ Features

### 1. **Hybrid Search System**
- **Primary**: Searches your local movie database first
- **Fallback**: Automatically queries TVMaze API for additional results
- **Smart**: Combines both sources and removes duplicates

### 2. **Real-time Search**
- **Debounced**: Waits 300ms after typing stops to avoid excessive API calls
- **Fast**: Uses caching to prevent repeated API calls for same queries
- **Responsive**: Shows loading indicator while fetching results

### 3. **Enhanced Results Display**
- **Local Results**: Click to go to movie detail page
- **TVMaze Results**: Click to open TVMaze page in new tab
- **Visual Badge**: TVMaze results marked with purple "TVMaze" badge
- **Images**: All results show poster images when available

## 🎯 How It Works

### Search Flow
```
User types query
    ↓
Wait 300ms (debounce)
    ↓
Search local database
    ↓
If < 8 results, search TVMaze API
    ↓
Combine & deduplicate results
    ↓
Display with visual distinction
```

### Example Searches

**Search: "Naruto"**
- ✅ Found in local database
- Shows with local movie styling
- Click → Opens your movie detail page

**Search: "Breaking Bad"**
- ✅ Not in local database
- ✅ Found via TVMaze API
- Shows with purple "TVMaze" badge
- Click → Opens TVMaze page in new tab

**Search: "Stranger Things"**
- ✅ Not in local database
- ✅ Found via TVMaze API
- Shows poster, year, network info
- Click → Opens TVMaze page

## 📁 Files Modified

### JavaScript Files
1. **tvmaze-search.js** (NEW)
   - `searchTVMaze()` - Search TVMaze API
   - `getTVMazeShowDetails()` - Get detailed show info
   - `searchWithFallback()` - Hybrid search function
   - `clearSearchCache()` - Clear search cache

2. **script.js** (UPDATED)
   - `initializeSearch()` - Added debounce
   - `searchMoviesWithTVMaze()` - NEW: Async search with TVMaze
   - `searchMoviesLocal()` - Renamed from `searchMovies()`
   - `displaySearchResults()` - Updated to handle TVMaze results

3. **movies.js** (UPDATED)
   - Same changes as script.js

4. **movie-detail.js** (UPDATED)
   - Same changes as script.js

### HTML Files
All HTML files updated to include `tvmaze-search.js`:
- index.html
- movies.html
- movie-detail.html

### CSS File (style.css)
Added new styles:
- `.search-loading` - Loading state animation
- `.tvmaze-badge` - Purple badge for TVMaze results
- `.search-result-item.tvmaze-result` - Styling for TVMaze results
- `.search-poster-fallback` - Fallback poster styling

## 🎨 Visual Differences

### Local Movie Results
```
┌─────────────────────────────┐
│ [Poster] Title              │
│          Category • Year    │
└─────────────────────────────┘
  ↑ Click → movie-detail.html
```

### TVMaze Results
```
┌─────────────────────────────┐
│ [Poster] Breaking Bad  │TV│ │
│          TV Series • 2008   │
└─────────────────────────────┘
  ↑ Purple border & badge
  ↑ Click → TVMaze page (new tab)
```

## 🔧 API Details

### TVMaze API Endpoints Used

1. **Search Shows**
   ```
   GET https://api.tvmaze.com/search/shows?q=QUERY
   ```
   - No API key required
   - Returns array of shows with scores

2. **Get Show Details**
   ```
   GET https://api.tvmaze.com/shows/ID
   ```
   - Used for detailed view (future enhancement)

### Rate Limits
- TVMaze allows ~10 requests per second
- Our 300ms debounce prevents hitting limits
- Caching reduces duplicate calls

### Data Mapping
TVMaze response → Our format:
```javascript
{
  id: show.id,
  title: show.name,
  year: parseInt(show.premiered.split('-')[0]),
  image: show.image.medium,
  category: show.type,
  director: show.network.name,
  description: stripHtml(show.summary),
  themes: show.genres.join(', '),
  rating: show.rating.average,
  isFromTVMaze: true,
  tvmazeId: show.id,
  url: show.url
}
```

## 🧪 Testing

### Test Cases

1. **Local Search**
   ```
   Search: "Naruto"
   Expected: Shows local Naruto entry
   ```

2. **TVMaze Search**
   ```
   Search: "Breaking Bad"
   Expected: Shows TVMaze result with badge
   ```

3. **Mixed Results**
   ```
   Search: "Attack"
   Expected: Both local (Attack on Titan) and TVMaze results
   ```

4. **No Results**
   ```
   Search: "xyzabc123"
   Expected: "No movies found" message
   ```

5. **Loading State**
   ```
   Search: "Game of Thrones"
   Expected: Brief "Searching..." animation
   ```

## 💡 Usage Examples

### For Users
1. Open any page with search bar
2. Type any movie/TV show name
3. Wait ~300ms for results
4. Local movies → Click to see details
5. TVMaze shows → Click to see TVMaze page

### For Developers
```javascript
// Search TVMaze directly
const results = await searchTVMaze("Breaking Bad", 5);

// Get detailed show info
const details = await getTVMazeShowDetails(169);

// Hybrid search (recommended)
const combined = await searchWithFallback("Stranger", localMovies, 8);

// Clear cache (if needed)
clearSearchCache();
```

## 🚀 Performance Optimizations

1. **Debouncing**: 300ms delay prevents excessive API calls
2. **Caching**: Results cached by query string
3. **Fallback**: Graceful degradation if API fails
4. **Limiting**: Max 8 results to keep UI clean
5. **Async**: Non-blocking, shows loading state

## 🔒 Error Handling

### If TVMaze API Fails
- Automatically falls back to local search only
- No user-facing errors
- Console logs error for debugging

### If Image Fails to Load
- Shows gradient fallback with movie initial
- Same as existing fallback system

### If Query Too Short (< 2 chars)
- Shows no results
- Doesn't make API call

## 🎓 Best Practices

### When to Use TVMaze Search
- ✅ User searches for shows not in local database
- ✅ User wants to discover new content
- ✅ Need up-to-date show information

### When Local Search is Better
- ✅ Show is in your curated list
- ✅ Want detailed analysis/themes
- ✅ Need to access rating/comment features

## 📝 Future Enhancements

Potential improvements:
1. Add "Add to Collection" button for TVMaze results
2. Fetch episodes/seasons data from TVMaze
3. Show TVMaze ratings in search results
4. Cache TVMaze results in localStorage for offline
5. Add "Similar Shows" using TVMaze recommendations
6. Fetch cast/crew information from TVMaze

## 🐛 Troubleshooting

### Search Not Working
- Check browser console for errors
- Verify tvmaze-search.js is loaded
- Check network tab for API calls

### No TVMaze Results
- API might be down (rare)
- Check CORS settings
- Try different search terms

### Images Not Showing
- TVMaze doesn't have images for all shows
- Fallback system should activate
- Check image URL in browser

## 📊 Statistics

- **TVMaze Database**: 60,000+ shows
- **API Uptime**: ~99.9%
- **Response Time**: ~100-300ms
- **Rate Limit**: ~10 requests/second
- **No API Key Required**: ✅

## 🔗 Useful Links

- TVMaze API Docs: https://www.tvmaze.com/api
- TVMaze Website: https://www.tvmaze.com
- API Base URL: https://api.tvmaze.com

---

**Enjoy your enhanced search experience! 🎉**
