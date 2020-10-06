// Import Database
const dbMongo = require("./database");

// Import environment
const { PORT, MONGODB_URI_LIVE } = require("./environment");

// Ekspor
module.exports = {
  dbMongo,
  PORT,
  MONGODB_URI_LIVE,
};
