# MovieLearn - PostgreSQL Integration Setup

## Overview
Your MovieLearn website now uses PostgreSQL to store comments, making them visible to all users across all browsers and devices.

## What Changed
- **Before**: Comments were stored in browser localStorage (only visible in that specific browser)
- **After**: Comments are stored in a PostgreSQL database (visible to everyone)

## Setup Instructions

### 1. Install Dependencies
Open a terminal/command prompt in the Movies folder and run:

```bash
npm install
```

This will install the required packages:
- `express` - Web server framework
- `pg` - PostgreSQL client
- `cors` - Enable cross-origin requests
- `dotenv` - Load environment variables

### 2. Start the Backend Server

**Option 1: Production mode**
```bash
npm start
```

**Option 2: Development mode (auto-restart on changes)**
```bash
npm run dev
```

The server will start on `http://localhost:3000`

### 3. Access Your Website
Open your browser and navigate to:
```
http://localhost:3000
```

The comments will now be stored in the PostgreSQL database!

## How It Works

### Database Schema
The server automatically creates a `comments` table with these fields:
- `id` - Auto-incrementing primary key
- `movie_id` - ID of the movie
- `user_id` - Unique identifier for each user
- `name` - User's name
- `text` - Comment text
- `created_at` - Timestamp

### API Endpoints

**GET /api/comments/:movieId**
Fetch all comments for a specific movie
```
Response: Array of comment objects
```

**POST /api/comments**
Add a new comment
```json
{
  "movieId": 1,
  "userId": "user_abc123",
  "name": "John Doe",
  "text": "Great movie!"
}
```

**DELETE /api/comments/:commentId**
Delete a comment

### File Structure
```
Movies/
├── server.js              # Backend server with PostgreSQL
├── .env                   # Database connection string
├── package.json           # Node.js dependencies
├── movie-detail.js        # Updated to use backend API
├── movie-detail.html      # Movie detail page
└── ... (other frontend files)
```

## Testing the Integration

1. Start the backend server: `npm start`
2. Open the website in your browser
3. Navigate to any movie detail page
4. Post a comment
5. Refresh the page - the comment should still be there
6. Open the same movie in a different browser/device - the comment should appear!

## Troubleshooting

### "Error connecting to PostgreSQL"
- Check that your internet connection is stable
- Verify the DATABASE_URL in `.env` is correct
- Ensure the Neon database is accessible

### "Unable to load comments"
- Make sure the backend server is running on port 3000
- Check the browser console for error messages
- Verify CORS is working properly

### Comments not appearing across browsers
- Ensure both browsers are accessing the same backend server
- Check that the server is running and accessible

## Deployment Notes

For production deployment:
1. Set the `DATABASE_URL` environment variable on your hosting platform
2. Use a process manager like PM2: `pm2 start server.js`
3. Consider adding rate limiting and authentication
4. Set up proper CORS origins for your domain

## Security Features
- XSS protection through HTML escaping
- Parameterized queries to prevent SQL injection
- User tracking with unique IDs
- Input validation on all endpoints

## Next Steps
- Add user authentication
- Implement comment editing/deletion
- Add pagination for large comment lists
- Create admin dashboard
- Add comment moderation
