// Import express
const express = require("express");
// Import model student controller
const Student = require("./StudentController");
const app = express();

// Read by all
app.get("/student", async (req, res) => {
  console.log("Ini Student", Student);
  const students = await Student.find({});
  try {
    res.send(students);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

// Ekspor
module.exports = app;
