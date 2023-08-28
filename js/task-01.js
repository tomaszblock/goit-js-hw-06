//Option 1

const categories = document.querySelector("#categories");
const numberOfCategories = categories.children.length;
const category = document.querySelectorAll("h2");
const title = document.querySelectorAll(".item");

console.log(`Number of categories: ${numberOfCategories}`);
console.log("");
title.forEach((ele) => {
  const titleInsideCategory = ele.querySelector("h2").textContent;
  const liInside = ele.querySelectorAll("li");
  console.log(`Category: ${titleInsideCategory}`);
  console.log(`Elements: ${liInside.length}`);
  console.log("");
});

// Option 2
// const categories = document.querySelector("#categories");
// const numberOfCategories = categories.children.length;
// const category = document.querySelectorAll("h2");

// console.log(`Number of categories: ${numberOfCategories}`);
// console.log("");
// console.log(`Category: ${category[0].textContent}`);
// console.log(
//   `Elements: ${
//     document
//       .querySelectorAll(".item")[0]
//       .querySelector("ul")
//       .querySelectorAll("li").length
//   }`
// );
// console.log("");
// console.log(`Category: ${category[1].textContent}`);
// console.log(
//   `Elements: ${
//     document
//       .querySelectorAll(".item")[1]
//       .querySelector("ul")
//       .querySelectorAll("li").length
//   }`
// );
// console.log("");
// console.log(`Category: ${category[2].textContent}`);
// console.log(
//   `Elements: ${
//     document
//       .querySelectorAll(".item")[2]
//       .querySelector("ul")
//       .querySelectorAll("li").length
//   }`
// );
