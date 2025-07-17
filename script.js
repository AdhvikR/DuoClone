function startLesson() {
  alert("Let's begin your first Marathi lesson!");
}
// Phrases for each lesson category
const phrases = {
  greeting: "नमस्कार! (Namaskar!) — Hello!",
  numbers: "एक, दोन, तीन (Ek, Don, Teen) — One, Two, Three",
  colors: "लाल, नारिंगी, पिवळा (Laal, Naarangi, Pivla) — Red, Orange, Yellow"
};

function showPhrase(lesson) {
  const phraseDiv = document.getElementById('phrase-display');
  phraseDiv.textContent = phrases[lesson] || "Lesson not found.";
}
