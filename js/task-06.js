const inputText = document.querySelector("#validation-input")
const minLength = document.querySelector("input[data-length]").dataset.length
console.log(length)



inputText.addEventListener("blur", (event) => {
const value = event.currentTarget.value
if(value.length >= minLength) {
    inputText.classList.remove("invalid")
inputText.classList.add("valid")
console.log(inputText)
}
else {
    inputText.classList.remove("valid")
inputText.classList.add("invalid")
console.log(inputText)
}
})  