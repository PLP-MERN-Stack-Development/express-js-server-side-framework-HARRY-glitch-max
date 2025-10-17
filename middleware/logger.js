// middleware/logger.js

const logger = (req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.originalUrl}`);
    next();  // Pass control to the next middleware
  };
  
  module.exports = logger;
  