const express = require('express');
const bodyParser = require("body-parser");
const mongoose = require('mongoose');

// setup express
const app = express();

// setup body parser middleware to conver to JSON and handle URL encoded forms
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

// connect to the mongodb database
mongoose.connect('mongodb://localhost:27017/hogwarts', {
  useUnifiedTopology: true,
  useNewUrlParser: true
});

// Create a scheme for items in the museum: a title and a path to an image.
const courseSchema = new mongoose.Schema({
    title: String,
    teacher: String,
    location: String,
    time: String
  });
  
// Create a model for courses in the directory.
const Course = mongoose.model('Course', courseSchema);

const studentSchema = new mongoose.Schema({
    first_name: String,
    last_name: String,
    blood_status: String,
    courses: String
})

// Create a model for students in the directory.
const Student = mongoose.model('Student', studentSchema);

// Create a new course.
app.post('/api/courses', async (req, res) => {
    const course = new Course({
      title: req.body.title,
      teacher: req.body.teacher,
      location: req.body.location,
      time: req.body.time
    });
    try {
      await course.save();
      res.send(course);
    } catch (error) {
      console.log(error);
      res.sendStatus(500);
    }
  });

// Create a new student.
app.post('/api/students', async (req, res) => {
    const student = new Student({
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      blood_status: req.body.blood_status,
      courses: req.body.courses
    });
    try {
      await student.save();
      res.send(student);
    } catch (error) {
      console.log(error);
      res.sendStatus(500);
    }
  });

// Get a list of all of the items in the museum.
app.get('/api/students', async (req, res) => {
    try {
      let students = await Student.find();
      res.send(students);
    } catch (error) {
      console.log(error);
      res.sendStatus(500);
    }
  });

app.listen(3002, () => console.log('Server listening on port 3002!'));