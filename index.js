import express from "express";
import bodyParser from "body-parser";
import pg from "pg";

// Create an Express application
const app = express();
const port = 3000;

// Configure PostgreSQL database connection
const db = new pg.Client({
  user: "postgres",     // Database username
  host: "localhost",    // Database host (localhost in this case)
  database: "world",    // Database name
  password: "junaid",   // Database password
  port: 5432,           // Database port (default PostgreSQL port)
});

// Connect to the database
db.connect();

let quiz = [];  // Array to store quiz data

// Fetch flag data from the 'flags' table in the database
db.query("SELECT * FROM flags", (err, res) => {
  if (err) {
    console.error("Error executing query", err.stack);
  } else {
    quiz = res.rows;  // Store fetched flag data in the quiz array
  }
  db.end();  // Close the database connection
});

let totalCorrect = 0;  // Counter to track correct answers

// Middleware setup
app.use(bodyParser.urlencoded({ extended: true })); // Parse form data
app.use(express.static("public"));  // Serve static files from the 'public' directory

let currentQuestion = {};  // Variable to store the current quiz question

// Handle GET request to home page
app.get("/", (req, res) => {
  totalCorrect = 0;  // Reset score when visiting home page
  nextQuestion();  // Load a new quiz question
  res.render("index.ejs", { question: currentQuestion });  // Render the quiz page
});

// Handle POST request when a user submits an answer
app.post("/submit", (req, res) => {
  let answer = req.body.answer.trim();  // Get user's answer and remove extra spaces
  let isCorrect = false;  // Default to incorrect answer
  let correctAnswer = currentQuestion.name;  // Get correct answer

  // Check if the user's answer matches the correct answer (case insensitive)
  if (currentQuestion.name.toLowerCase() === answer.toLowerCase()) {
    totalCorrect++;  // Increase score if correct
    isCorrect = true;
  }

  nextQuestion();  // Load the next question

  // Render the page with updated score and answer feedback
  res.render("index.ejs", {
    question: currentQuestion,
    wasCorrect: isCorrect,
    totalScore: totalCorrect,
    correctAnswer: correctAnswer,
  });
});

// Function to pick a random flag from the quiz array
function nextQuestion() {
  const randomCountryFlag = quiz[Math.floor(Math.random() * quiz.length)];
  currentQuestion = randomCountryFlag;  // Set new question
}

// Start the server and listen on the specified port
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
