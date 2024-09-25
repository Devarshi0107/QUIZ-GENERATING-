

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb+srv://22it074:sUbYLPvGYz2iS8hC@mcq-app.b0lia.mongodb.net/?retryWrites=true&w=majority&appName=mcq-app', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Quiz Schema
const quizSchema = new mongoose.Schema({
  filename: String,
  timestamp: Date,
  exam_name: { type: String, required: true },
  schedule_date: { type: Date, required: true },
  schedule_time_range: { type: String, required: true },
  branch: { type: String, required: true },
  batch: { type: String, required: true },
  roll_number_range: { type: String, required: true },
  questions: Array
  
});

const Quiz = mongoose.model('mcq_exam_data', quizSchema);

// Endpoint to save quiz
app.post('/api/save-quiz', async (req, res) => {
  const { filename, exam_name, schedule_date, schedule_time_range, branch, batch, roll_number_range , questions} = req.body;
  const timestamp = new Date();

  const newQuiz = new Quiz({
    filename,
    timestamp,
    
    exam_name,
    schedule_date,
    schedule_time_range,
    branch,
    batch,
    roll_number_range,
    questions
  });

  try {
    await newQuiz.save();
    res.status(201).send({ message: 'Quiz saved successfully' });
  } catch (error) {
    res.status(500).send({ error: 'Failed to save quiz' });
  }
});

// Add endpoint to fetch all quizzes
app.get('/api/quizzes', async (req, res) => {
  try {
    const quizzes = await Quiz.find();
    res.status(200).json(quizzes);
  } catch (error) {
    res.status(500).send({ error: 'Failed to fetch quizzes' });
  }
});

app.listen(3001, () => {
  console.log('Server is running on port 3001');
});
