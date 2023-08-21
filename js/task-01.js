const categories = document.querySelector("#categories");
const numberOfCategories = categories.children.length;
const category = document.querySelectorAll("h2");

console.log(`Number of categories: ${numberOfCategories}`);
console.log("");
console.log(`Category: ${category[0].textContent}`);
console.log(
  `Elements: ${
    document
      .querySelectorAll(".item")[0]
      .querySelector("ul")
      .querySelectorAll("li").length
  }`
);
console.log("");
console.log(`Category: ${category[1].textContent}`);
console.log(
  `Elements: ${
    document
      .querySelectorAll(".item")[1]
      .querySelector("ul")
      .querySelectorAll("li").length
  }`
);
console.log("");
console.log(`Category: ${category[2].textContent}`);
console.log(
  `Elements: ${
    document
      .querySelectorAll(".item")[2]
      .querySelector("ul")
      .querySelectorAll("li").length
  }`
);
