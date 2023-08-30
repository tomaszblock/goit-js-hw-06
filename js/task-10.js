const inputWindow = document.querySelector("input");
const createButton = document.querySelector("button[data-create]");
const destroyButton = document.querySelector("button[data-destroy]");
const box = document.querySelector("#boxes");
createButton.addEventListener("click", createBoxes);
let result = 0;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes() {
  const amount = inputWindow.value;
  const firstBox = document.createElement("div");
  let border = 30;
  if (amount > 0 && result === 0) {
    firstBox;
    firstBox.style.backgroundColor = getRandomHexColor();
    firstBox.style.width = "30px";
    firstBox.style.height = "30px";
    // firstBox.setAttribute("data-id", "1");
    box.append(firstBox);
    result++
  }
  if (amount > 1) {
    for (let i = 1; i < amount; i++) {
      const nextBox = document.createElement("div");
      // const test1 = document.querySelector('[data-id="' + selector + '"]');

      border += 10;
      nextBox;
      nextBox.style.backgroundColor = getRandomHexColor();
      nextBox.style.width = border + "px";
      nextBox.style.height = border + "px";
      box.append(nextBox);
      result++;
      console.log(result)

      // console.log(test2);
      // console.log(test3);
      // console.log(test4);
    }
  }
}


