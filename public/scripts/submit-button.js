// public/scripts/submit-button.js
// Randomizes the submit button text with unhinged, geo-roasting phrases

document.addEventListener("DOMContentLoaded", () => {
    // Brutal submit phrases designed to destroy confidence
    const buttonPhrases = [
      "VIOLATE THEIR INDEPENDENCE",
      "FLAG YOUR FAILURE",
      "STAB IN THE FLAG",
      "SQUINT HARDER",
      "GOOGLE MAPS, PLEASE",
      "FLAG YOUR DELUSION",
      "COLONIZE CONFUSION",
    ];
  
    // Target the submit button
    const btn = document.querySelector("button[type='submit']");
  
    // If the button exists and has children, change its text
    if (btn && btn.childNodes.length > 0) {
      btn.childNodes[0].nodeValue =
        buttonPhrases[Math.floor(Math.random() * buttonPhrases.length)] + " ";
    }
  });
  