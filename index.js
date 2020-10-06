// Import Express
const express = require("express");
const app = express();
// Import port, mongodb uri live dari folder config
const { PORT, MONGODB_URI_LIVE } = require("./config");

// Import config database
const { dbMongo } = require("./config");

// Import Routes student controller
const studentRouter = require("./routes/StudentController");

// Local port
const localPort = PORT || 9000;
console.log("Ini port", PORT);
console.log("Mongodb uri live", MONGODB_URI_LIVE);
// console.log("dbmongo", dbMongo);

// Read
app.get("/", (req, res) => {
  res.send("Halo Semuanya");
});

// Cek koneksi local port dan database.js dbmongo
if (dbMongo) {
  app.listen(localPort, () => {
    console.log(`Koneksi berhasil ${localPort}`);
  });
} else {
  console.log("Koneksi database gagal");
}
