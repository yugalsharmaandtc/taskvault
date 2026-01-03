const express = require('express');
const cors = require('cors');
const taskRoutes = require('./routes/task.routes');

const app = express();

// Global middlewares
app.use(cors());
app.use(express.json());

// Routes
app.use('/api', taskRoutes);

// Health check
app.get('/health', (req, res) => {
    res.status(200).json({ status: 'OK' });
});

module.exports = app;
