// Import Mongoose
const mongoose = require("mongoose");

// Import environment dan di file .env
const { MONGODB_URI_LIVE } = require("./environment");

// Koneksikan ke mongoose dari cluster mongoDB
mongoose.connect(MONGODB_URI_LIVE, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Eksport database.js
const dbMongo = mongoose.connection;
module.exports = dbMongo;
