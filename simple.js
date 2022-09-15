const button = document.getElementById("changeColor");
const hexText = document.getElementById("hexColor");

const colors = [
  "red",
  "blue",
  "yellow",
  "green",
  "orange",
  "brown",
  "white",
  "black",
  "purple",
];

button.addEventListener("click", function () {
  let randomNum = 0;
  randomNum = Math.random() * colors.length;
  randomNum = Math.round(randomNum);
  hexText.innerText = colors[randomNum];
  document.body.style.backgroundColor = colors[randomNum];
});
