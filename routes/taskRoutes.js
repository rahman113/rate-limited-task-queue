// routes/taskRoutes.js
const express = require('express');
const router = express.Router();
const { addTask } = require('../services/taskService');
const { createLogger } = require('../utils/logger');

const logger = createLogger();

router.post('/', async (req, res) => {
    const { user_id } = req.body;
    try {
        await addTask(user_id);
        res.status(200).send('Task received');
    } catch (error) {
        res.status(500).send('Internal Server Error');
        logger.error(`Error adding task for user ${user_id}: ${error.message}`);
    }
});

module.exports = router;
