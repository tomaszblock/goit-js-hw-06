const value = document.querySelector("#value");
const buttonInc = document.querySelector('button[data-action="increment"]');
const buttonDec = document.querySelector('button[data-action="decrement"]');
let counterValue = 0;
console.log(value);
const add = () => {
  //   console.log(counterValue);
  return counterValue++;
};
const subtract = () => {
  //   console.log(counterValue);
  return counterValue--;
};
buttonInc.addEventListener("click", add);
buttonDec.addEventListener("click", subtract);
console.log(`teraz liczba to ${counterValue}`); // <--- czemu tu nie odświeża counterValue?
