// services/taskService.js
const fs = require('fs');
const path = require('path');
const { createLogger } = require('../utils/logger');
const { redisClient } = require('../config/redis');
const Bull = require('bull');

const logger = createLogger();
const taskQueue = new Bull('taskQueue', { redis: redisClient });

async function task(user_id) {
    try {
        const logMessage = `${user_id}-task completed at-${Date.now()}`;
        logger.info(logMessage);
        fs.appendFileSync(path.join(__dirname, '../logs/task.log'), logMessage + '\n');
    } catch (error) {
        logger.error('Error writing to log file:', error);
    }
}

async function addTask(user_id) {
    await taskQueue.add({ user_id });
}

module.exports = { addTask, task };
