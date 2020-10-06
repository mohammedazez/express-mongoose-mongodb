// Import Mongoose
const moongose = require("mongoose");

// Mendefinisikan skema Anda
const StudentSchema = new moongose.Schema({
  name: {
    type: String,
    required: true,
  },
  class: {
    type: String,
  },
});

const Student = moongose.model("Student", StudentSchema);

// Ekspor
module.exports = Student;
