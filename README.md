# Rate-Limited Task Queue

This project demonstrates a Node.js API for handling tasks with rate limiting and queuing. The API ensures that each user ID can process only one task per second and up to 20 tasks per minute. Tasks are managed using a queue with Bull and rate-limited with Redis.

## Features

- **Rate Limiting**: Enforces a limit of 1 task per second and up to 20 tasks per minute per user ID.
- **Task Queuing**: Uses Bull for task queuing to manage task processing and ensure rate limits are respected.
- **Logging**: Task completion messages are logged to `task.log` with timestamps and user IDs.

## Folder Structure

ate-limited-task-queue/ │ ├── config/ │ └── redis.js # Redis configuration │ ├── services/ │ ├── taskService.js # Task processing and logging │ └── queueService.js # Queue processing │ ├── routes/ │ └── taskRoutes.js # API route for tasks │ ├── utils/ │ └── logger.js # Logger setup │ ├── logs/ │ └── task.log # Log file for task completion │ ├── server.js # Main server file └── package.json # Project configuration


## Setup and Installation

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/yourusername/rate-limited-task-queue.git
   cd rate-limited-task-queue

2. Install Dependencies:
npm install

3. Configure Redis: Ensure you have Redis installed and running. Update the config/redis.js if necessary.
4. Start the Server:node server.js
5. Testing the API:

Use Postman or any API client to send a POST request to http://localhost:3000/task with the following JSON body:

{
  "user_id": "123"
}
Viewing Logs
Task completion logs are saved in the logs/task.log file. After sending requests, you can view the log entries to see the processed tasks.

![Screenshot from 2024-08-26 18-12-21](https://github.com/user-attachments/assets/4cdea2c2-fe08-4360-a887-b59ede283ffe)





