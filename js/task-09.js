const changeColor = document.querySelector("button");
const textValue = document.querySelector("span");
const body = document.querySelector("body");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

changeColor.addEventListener("click", () => {
  const color = getRandomHexColor();
  textValue.textContent = color;
  body.style.backgroundColor = color;
});
