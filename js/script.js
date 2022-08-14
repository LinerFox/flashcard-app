const term = document.querySelector(".term");
const checkButton = document.querySelector(".check");
const nextButton = document.querySelector(".next");
const definition = document.querySelector(".definition");

words = {
  Hello: "Konichiwa",
  Goodbye: "Sayonara",
  "Good Evening": "Kombanwa",
};

data = Object.entries(words);

// Function to get random term
function getRandomWord() {
  //Random number rounding it down and multiplying it by the length of our data
  randomTerm = data[Math.floor(Math.random() * data.length)];
  term.innerHTML = `<h3>${randomTerm[0]}</h3>`;
  definition.innerHTML = `<h3>${randomTerm[1]}</h3>`;
}

// Check button with event listener
checkButton.addEventListener("click", function () {
  definition.style.display = "block";
});

nextButton.addEventListener("click", function () {
  definition.style.display = "none";
  getRandomWord();
});
