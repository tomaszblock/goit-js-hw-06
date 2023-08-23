const value = document.querySelector("#value");
const buttonInc = document.querySelector('button[data-action="increment"]');
const buttonDec = document.querySelector('button[data-action="decrement"]');
let counterValue = 0;
const add = () => {
  counterValue++;
  return (value.textContent = `${counterValue}`);
};
const subtract = () => {
  counterValue--;
  return (value.textContent = `${counterValue}`);
};
buttonInc.addEventListener("click", add);
buttonDec.addEventListener("click", subtract);
