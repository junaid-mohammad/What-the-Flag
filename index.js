// index.js
// Main entry point for the "What the Flag?" app – handles server setup and routing

import express from "express";                     // Express framework
import bodyParser from "body-parser";              // Middleware for form data
import dotenv from "dotenv";                       // Load .env variables
import path from "path";                           // File path utilities
import { fileURLToPath } from "url";               // ES module __dirname workaround
import { loadFlagData, getRandomFlag } from "./utils/flagData.js"; // Quiz logic

dotenv.config();

// Initialize Express app
const app = express();
const port = process.env.PORT || 3000;

// Middleware setup
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));                 // Serve static files (CSS, JS, images)

// Set view engine
app.set("view engine", "ejs");

// Resolve __dirname in ES module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.set("views", path.join(__dirname, "views"));   // View directory path

// App-level state
let flagQuiz = [];          // Flag dataset (country + emoji or path)
let totalCorrect = 0;       // Score tracker
let currentQuestion = {};   // Active flag

// Load data from DB or fallback
loadFlagData()
  .then((data) => {
    flagQuiz = data;
  })
  .catch((err) => {
    console.error("Failed to load flag data:", err);
  });

// GET: Homepage
app.get("/", (req, res) => {
  totalCorrect = 0;
  currentQuestion = getRandomFlag(flagQuiz);
  res.render("index", {
    question: currentQuestion,
    wasCorrect: null,
    totalScore: totalCorrect,
    correctAnswer: null,
  });
});

// POST: Flag guess submission
app.post("/submit", (req, res) => {
  const answer = req.body.answer.trim();
  const correctAnswer = currentQuestion.name;
  let isCorrect = false;

  if (correctAnswer.toLowerCase() === answer.toLowerCase()) {
    totalCorrect++;
    isCorrect = true;
  }

  currentQuestion = getRandomFlag(flagQuiz);

  res.render("index", {
    question: currentQuestion,
    wasCorrect: isCorrect,
    totalScore: totalCorrect,
    correctAnswer: correctAnswer,
  });
});

// Start the server
app.listen(port, () => {
  console.log(`🌍 What the Flag? running at http://localhost:${port}`);
});
