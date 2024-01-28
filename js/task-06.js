const textInput = document.querySelector("#validation-input");
const minLength = parseInt(textInput.dataset.length);
console.log(length);

textInput.addEventListener("blur", (event) => {
  const value = event.currentTarget.value;
  if (value.length === minLength) {
    textInput.classList.remove("invalid");
    textInput.classList.add("valid");
    console.log(textInput);
  } else {
    textInput.classList.remove("valid");
    textInput.classList.add("invalid");
    console.log(textInput);
  }
});

console.log(minLength);
