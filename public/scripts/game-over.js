// public/scripts/game-over.js
// Displays the Game Over UI when the user's guess was incorrect

// Passive-aggressive restart options for emotional damage
const restartPhrases = [
    "SQUINT HARDER?",
    "GOOGLE MAPS, PLEASE?",
    "BUTCHER MORE BORDERS?",
    "OFFEND MORE NATIONS?",
    "DOUBLE DOWN ON DELUSION?",
    "EMBARRASS YOURSELF AGAIN?",
    "WAVE YOUR WHITE FLAG YET?"
  ];
  
  // Read data attributes injected by the server
  const wasCorrect = document.body.getAttribute("data-was-correct");
  const correctAnswer = document.body.getAttribute("data-correct-answer");
  const totalScore = document.body.getAttribute("data-total-score");
  
  // If the user got it wrong, destroy them gently
  if (wasCorrect === "false") {
    const restartText = restartPhrases[Math.floor(Math.random() * restartPhrases.length)];
  
    document.getElementById("app").innerHTML = `
      <div class="card game-over-card">
        <h1>Diplomatic Disaster.</h1>
        <p>What the flag, bro? That’s a <strong>${totalScore}</strong></p>
        <p>You just colonized <strong>${correctAnswer}</strong>. Congrats?</p>
        <p class="message">Wave harder next time.</p>
        <a href="/" class="restart-button">${restartText}</a>
      </div>
    `;
  
    // Pressing Enter should also restart the quiz
    document.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.keyCode === 13) {
        window.location.href = "/";
      }
    });
  }
  