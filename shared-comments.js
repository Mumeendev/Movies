/**
 * Shared Comments System for MovieLearn
 * Enables comments to be seen across browser tabs using localStorage events
 * and BroadcastChannel API for real-time synchronization
 */

class SharedCommentsSystem {
    constructor() {
        this.channelName = 'movielearn_comments_sync';
        this.channel = null;
        this.listeners = [];
        this.userId = this.generateUserId();
        
        this.init();
    }

    init() {
        // Try BroadcastChannel for real-time sync
        try {
            this.channel = new BroadcastChannel(this.channelName);
            this.channel.onmessage = (event) => {
                this.handleMessage(event.data);
            };
        } catch (e) {
            console.log('BroadcastChannel not supported, using storage events');
        }

        // Fallback: Listen to localStorage changes
        window.addEventListener('storage', (e) => {
            if (e.key && e.key.startsWith('comments_')) {
                const movieId = parseInt(e.key.replace('comments_', ''));
                if (!isNaN(movieId)) {
                    this.notifyListeners(movieId);
                }
            }
        });
    }

    generateUserId() {
        return 'user_' + Math.random().toString(36).substr(2, 9) + '_' + Date.now();
    }

    getUserId() {
        return this.userId;
    }

    handleMessage(data) {
        if (data.type === 'comment_added' && data.movieId) {
            this.notifyListeners(data.movieId);
        }
    }

    addListener(movieId, callback) {
        this.listeners.push({ movieId, callback });
    }

    removeListener(movieId, callback) {
        this.listeners = this.listeners.filter(
            l => !(l.movieId === movieId && l.callback === callback)
        );
    }

    notifyListeners(movieId) {
        this.listeners
            .filter(l => l.movieId === movieId)
            .forEach(l => l.callback());
    }

    getComments(movieId) {
        try {
            return JSON.parse(localStorage.getItem(`comments_${movieId}`)) || [];
        } catch (e) {
            return [];
        }
    }

    addComment(movieId, name, text) {
        const comments = this.getComments(movieId);
        const newComment = {
            id: 'comment_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9),
            userId: this.userId,
            name: name.trim(),
            text: text.trim(),
            timestamp: Date.now(),
            date: new Date().toLocaleString('en-US', { 
                year: 'numeric', 
                month: 'short', 
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit'
            })
        };

        comments.unshift(newComment);
        localStorage.setItem(`comments_${movieId}`, JSON.stringify(comments));

        // Broadcast to other tabs
        if (this.channel) {
            this.channel.postMessage({
                type: 'comment_added',
                movieId: movieId
            });
        }

        // Notify local listeners
        this.notifyListeners(movieId);

        return newComment;
    }

    deleteComment(movieId, commentId) {
        const comments = this.getComments(movieId);
        const filtered = comments.filter(c => c.id !== commentId);
        
        if (filtered.length !== comments.length) {
            localStorage.setItem(`comments_${movieId}`, JSON.stringify(filtered));
            this.notifyListeners(movieId);
            return true;
        }
        return false;
    }

    getCommentsCount(movieId) {
        return this.getComments(movieId).length;
    }

    getLatestComment(movieId) {
        const comments = this.getComments(movieId);
        return comments.length > 0 ? comments[0] : null;
    }

    escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }
}

// Create global instance
const sharedComments = new SharedCommentsSystem();
