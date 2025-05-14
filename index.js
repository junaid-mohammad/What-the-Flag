// ============================================
// 🚩 What the Flag? – Main Server File
// ============================================
// This Express-based backend handles all routing, data loading, and view rendering
// for the flag identification game. Built with EJS and PostgreSQL support.

// --------------------------------------------
// 🔧 Module Imports
// --------------------------------------------
import express from "express";                     // Web framework for routing and server logic
import bodyParser from "body-parser";              // Middleware to parse incoming form data
import dotenv from "dotenv";                       // Loads environment variables from .env file
import path from "path";                           // Utility to work with directory paths
import { fileURLToPath } from "url";               // Fixes __dirname in ES module context
import { loadFlagData, getRandomFlag } from "./utils/flagData.js"; // DB + quiz utilities

// --------------------------------------------
// ⚙️ Configuration + Setup
// --------------------------------------------
dotenv.config();                                    // Load .env variables

const app = express();                              // Initialize Express app
const port = process.env.PORT || 3000;              // Default port

// Set up middleware
app.use(bodyParser.urlencoded({ extended: true })); // Parse form submissions
app.use(express.static("public"));                  // Serve static assets from /public

// Set EJS as templating engine
app.set("view engine", "ejs");

// Manually resolve __dirname (not natively available in ES modules)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.set("views", path.join(__dirname, "views"));    // Set views directory

// --------------------------------------------
// 📦 Game State (in-memory only)
// --------------------------------------------
let flagQuiz = [];          // Array of flag objects (e.g., { flag: 🇨🇦, name: "Canada" })
let totalCorrect = 0;       // Tracks number of correct guesses per session
let currentQuestion = {};   // Stores the active flag question

// --------------------------------------------
// 🛠 Load Flag Dataset (from DB or fallback)
// --------------------------------------------
loadFlagData()
  .then((data) => {
    flagQuiz = data;
  })
  .catch((err) => {
    console.error("❌ Failed to load flag data:", err);
  });

// --------------------------------------------
// 🏠 GET / – Home Page / Start Quiz
// --------------------------------------------
app.get("/", (req, res) => {
  totalCorrect = 0;                                 // Reset score for new session
  currentQuestion = getRandomFlag(flagQuiz);        // Pick random flag
  res.render("index", {
    question: currentQuestion,
    wasCorrect: null,
    totalScore: totalCorrect,
    correctAnswer: null,
  });
});

// --------------------------------------------
// 🧠 POST /submit – Handle User Guess
// --------------------------------------------
app.post("/submit", (req, res) => {
  const answer = req.body.answer.trim();            // Clean user input
  const correctAnswer = currentQuestion.name;
  let isCorrect = false;

  // Case-insensitive comparison
  if (correctAnswer.toLowerCase() === answer.toLowerCase()) {
    totalCorrect++;                                 // Update score if correct
    isCorrect = true;
  }

  currentQuestion = getRandomFlag(flagQuiz);        // Move to next flag

  // Render result page with feedback
  res.render("index", {
    question: currentQuestion,
    wasCorrect: isCorrect,
    totalScore: totalCorrect,
    correctAnswer: correctAnswer,
  });
});

// --------------------------------------------
// 🚀 Start Express Server
// --------------------------------------------
app.listen(port, () => {
  console.log(`🚩 What the Flag? running at http://localhost:${port}`);
});
