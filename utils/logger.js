// utils/logger.js
const winston = require('winston');
const path = require('path');

function createLogger() {
    return winston.createLogger({
        level: 'info',
        format: winston.format.simple(),
        transports: [
            new winston.transports.File({ filename: path.join(__dirname, '../logs/task.log') }),
            new winston.transports.Console(),
        ],
    });
}

module.exports = { createLogger };
