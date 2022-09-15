const button = document.getElementById("changeColor");
const hexText = document.getElementById("hexColor");

button.addEventListener("click", function () {
  let chars = "abcdef0123456789";
  let i = 0;
  let color = "#";
  while (i < 6) {
    i++;
    color += chars.charAt(Math.round(Math.random() * 16));
  }
  hexText.innerText = color;
  document.body.style.backgroundColor = color;
});
