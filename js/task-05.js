const textInput = document.querySelector("#name-input");
const output = document.querySelector("#name-output");
textInput.addEventListener("input", (event) => {
  const value = event.currentTarget.value.trim();
  if (value.length === 0) {
    output.innerText = "Anonymous";
  } else {
    output.textContent = event.currentTarget.value.trim();
  }
});
