// server.js
const express = require('express');
const path = require('path');
const { createLogger } = require('./utils/logger');
const { processTasks } = require('./services/queueService');
const taskRoutes = require('./routes/taskRoutes');

const app = express();
const port = process.env.PORT || 3000;

// Initialize Logger
const logger = createLogger();

// Middleware
app.use(express.json());
app.use('/task', taskRoutes);

// Start processing tasks
processTasks();

// Start server
app.listen(port, () => {
    logger.info(`Server running on port ${port}`);
    console.log(`Server running on port ${port}`);
});

// Error handling middleware
app.use((err, req, res, next) => {
    logger.error(`Error occurred: ${err.message}`);
    res.status(500).send('Internal Server Error');
});
