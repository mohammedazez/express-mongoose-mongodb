// Import express
const express = require("express");
// Import model student
const Student = require("../models/Student");
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

// Read by id
app.get("/student/:id", async (req, res) => {
  console.log("Ini Student", Student);
  const students = await Student.findById(req.params.id);
  try {
    res.send(students);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

// Create
app.post("/student", async (req, res) => {
  console.log("Student", Student);
  const students = await Student.create(req.body);
  console.log("ini student", students);
  try {
    res.send(students);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

// Ekspor
module.exports = app;
