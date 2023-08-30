const inputWindow = document.querySelector("input");
const createButton = document.querySelector("button[data-create]");
const destroyButton = document.querySelector("button[data-destroy]");
const box = document.querySelector("#boxes");
createButton.addEventListener("click", createBoxes);
let result = 0;
let border = 30;
const min = inputWindow.getAttribute("min");
const max = inputWindow.getAttribute("max");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes() {
  const amount = inputWindow.value;
  if (amount < Number(min) || amount > Number(max)) {
    inputWindow.style.borderColor = "red";
  } else {
    inputWindow.style.borderColor = "black";
    for (let i = 0; i < amount; i++) {
      const nextBox = document.createElement("div");
      nextBox;
      nextBox.style.backgroundColor = getRandomHexColor();
      nextBox.style.width = border + "px";
      nextBox.style.height = border + "px";
      box.append(nextBox);
      border += 10;
      result++;
      console.log(result);
      console.log(border);
    }
  }
}

destroyButton.addEventListener("click", deleteBoxes);
function deleteBoxes() {
  console.log(result);
  console.log(border);
}
