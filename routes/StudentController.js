// Import express
const express = require("express");
// Import model student
const Student = require("../models/Student");
const app = express();

// Dokumentasi lengkap tentang crud
// https://mongoosejs.com/docs/queries.html
// Read all data
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

// Delete by id
app.delete("/student/:id", async (req, res) => {
  const students = await Student.findByIdAndDelete(req.params.id);

  try {
    if (!students) res.status(404).send("Tidak ditemukan");
    res.status(200).send("Data berhasil dihapus");
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

// Update data by id
app.put("/student/:id", async (req, res) => {
  const students = await Student.findByIdAndUpdate(req.params.id, req.body);
  try {
    await students.save();
    res.status(200).send("data berhasil dirubah");
  } catch (error) {
    res.status(500).send(error);
  }
});

// Ekspor
module.exports = app;
