require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname)));

// PostgreSQL Connection
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

// Test database connection
pool.connect((err, client, release) => {
  if (err) {
    console.error('❌ Error connecting to PostgreSQL:', err.stack);
  } else {
    console.log('✅ Connected to PostgreSQL database');
    release();
  }
});

// Initialize database schema
async function initializeDatabase() {
  try {
    await pool.query(`
      CREATE TABLE IF NOT EXISTS comments (
        id SERIAL PRIMARY KEY,
        movie_id INTEGER NOT NULL,
        user_id VARCHAR(255) NOT NULL,
        name VARCHAR(255) NOT NULL,
        text TEXT NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);

    // Create index for faster queries
    await pool.query(`
      CREATE INDEX IF NOT EXISTS idx_comments_movie_id 
      ON comments(movie_id)
    `);

    console.log('✅ Database schema initialized');
  } catch (err) {
    console.error('❌ Error initializing database:', err.message);
  }
}

// ==================== API ENDPOINTS ====================

// Get all comments for a movie
app.get('/api/comments/:movieId', async (req, res) => {
  try {
    const { movieId } = req.params;
    
    const result = await pool.query(
      'SELECT * FROM comments WHERE movie_id = $1 ORDER BY created_at DESC',
      [movieId]
    );

    const comments = result.rows.map(row => ({
      id: `comment_${row.id}`,
      movieId: row.movie_id,
      userId: row.user_id,
      name: row.name,
      text: row.text,
      timestamp: new Date(row.created_at).getTime(),
      date: new Date(row.created_at).toLocaleString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      })
    }));

    res.json(comments);
  } catch (err) {
    console.error('Error fetching comments:', err.message);
    res.status(500).json({ error: 'Failed to fetch comments' });
  }
});

// Add a new comment
app.post('/api/comments', async (req, res) => {
  try {
    const { movieId, userId, name, text } = req.body;

    if (!movieId || !name || !text) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    const result = await pool.query(
      'INSERT INTO comments (movie_id, user_id, name, text) VALUES ($1, $2, $3, $4) RETURNING *',
      [movieId, userId || 'anonymous', name, text]
    );

    const row = result.rows[0];
    const newComment = {
      id: `comment_${row.id}`,
      movieId: row.movie_id,
      userId: row.user_id,
      name: row.name,
      text: row.text,
      timestamp: new Date(row.created_at).getTime(),
      date: new Date(row.created_at).toLocaleString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      })
    };

    res.status(201).json(newComment);
  } catch (err) {
    console.error('Error adding comment:', err.message);
    res.status(500).json({ error: 'Failed to add comment' });
  }
});

// Delete a comment (optional - for future use)
app.delete('/api/comments/:commentId', async (req, res) => {
  try {
    const { commentId } = req.params;
    const numericId = parseInt(commentId.replace('comment_', ''));

    if (isNaN(numericId)) {
      return res.status(400).json({ error: 'Invalid comment ID' });
    }

    const result = await pool.query(
      'DELETE FROM comments WHERE id = $1 RETURNING id',
      [numericId]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Comment not found' });
    }

    res.json({ message: 'Comment deleted successfully' });
  } catch (err) {
    console.error('Error deleting comment:', err.message);
    res.status(500).json({ error: 'Failed to delete comment' });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'Server is running' });
});

// Start server
app.listen(PORT, async () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
  await initializeDatabase();
});

module.exports = app;
