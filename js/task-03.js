const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];
// Option 1

const parent = document.querySelector(".gallery");
console.log(parent);
const test = images.map((ele) => {
  const imgEle = `<li><img src="${ele.url}" class="test" alt="${ele.alt}"></li>`;
  parent.insertAdjacentHTML("beforeend", imgEle);
});
const imgClass = document.querySelector(".test");
imgClass.style.width = "200px";

// option 2

// const parent = document.querySelector(".gallery");
// for (const i of images) {
//   const newList = document.createElement("li");
//   parent.append(newList);
//   const element = parent.lastElementChild;
//   const newImg = document.createElement("img");
//   newImg.src = i.url;
//   newImg.alt = i.alt;
//   element.append(newImg);
// }
// console.log(parent);

//option 3

// const parent = document.querySelector(".gallery");
// for (const i of images) {
//   const element = `<li><img src="${i.url}" alt="${i.alt}"></li>`;
//   console.log(element);
//   parent.insertAdjacentHTML("beforeend", element);
// }
// parent.style.display = "flex";
// parent.style.alignItems = "center";
// parent.style.flexDirection = "column";
// parent.style.gap = "30px";
// console.log(parent);
