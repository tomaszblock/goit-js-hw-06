const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const result = [];
for (const i of ingredients) {
  const newElement = document.createElement("li");
  newElement.classList.add("item");
  newElement.textContent = i;
  result.push(newElement);
}
const parent = document.querySelector("#ingredients");
parent.append(...result);
