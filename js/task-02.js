const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

for (const i of ingredients) {
  console.log(i);
  const parent = document.querySelector("#ingredients");
  const newElement = document.createElement("li");
  newElement.classList.add("item");
  newElement.textContent = i;
  parent.append(newElement);
}
