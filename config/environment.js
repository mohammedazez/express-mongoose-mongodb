// import dotenv
require("dotenv").config();

// Ambil dari env
module.exports = {
  PORT: process.env.PORT,
  MONGODB_URI_LIVE: process.env.MONGODB_URI_LIVE,
};
