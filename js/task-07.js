const range = document.querySelector("#font-size-control")
const text = document.querySelector("#text")
range.addEventListener("click", (event) => 
{const value = event.currentTarget.value
console.log(value)
text.style.fontSize = value + "px"
})

