const inputWindow = document.querySelector("input");
const createButton = document.querySelector("button[data-create]");
const destroyButton = document.querySelector("button[data-destroy]");
const box = document.querySelector("#boxes");
createButton.addEventListener("click", createBoxes);
// let result = 0;
let border = 20;
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
      border += 10;
      nextBox.style.width = border + "px";
      nextBox.style.height = border + "px";
      box.append(nextBox);
      // result++;
      // console.log(result);
      console.log(border);
    }
  }
}

destroyButton.addEventListener("click", deleteBoxes);
function deleteBoxes() {
  const amount = inputWindow.value;
  for (let a = 0; a < amount; a++) {
    const deleteBox = box.lastElementChild
    deleteBox.remove()
    console.log(a)
    border -= 10;
  }
  
  // console.log(amount)
  // console.log(result);
  // console.log(border);
}
