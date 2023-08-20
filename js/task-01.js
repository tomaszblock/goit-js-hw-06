const categories = document.querySelector("#categories");
const numberOfCategories = categories.children.length;

console.log(`Number of categories: ${numberOfCategories}`);
console.log("");
console.log(`Category: ${categories.firstElementChild.value}`);

console.log(categories.querySelectorAll("li"));
