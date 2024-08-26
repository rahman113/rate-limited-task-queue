// services/queueService.js
const Bull = require('bull');
const { createLogger } = require('../utils/logger');
const { task } = require('./taskService');
const { redisClient } = require('../config/redis');

const logger = createLogger();
const taskQueue = new Bull('taskQueue', { redis: redisClient });

function processTasks() {
    taskQueue.process(async (job) => {
        try {
            const { user_id } = job.data;
            await task(user_id);
        } catch (error) {
            logger.error(`Error processing task for user ${job.data.user_id}: ${error.message}`);
        }
    });
}

module.exports = { processTasks };
