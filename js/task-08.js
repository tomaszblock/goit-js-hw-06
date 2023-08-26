const registerForm = document.querySelector(".login-form");
const emailInput = document.querySelector("input[type=email]");
const passwordInput = document.querySelector("input[type=password]");
registerForm.addEventListener("submit", validation);
const result = {};

function validation(event) {
  event.preventDefault();
  const form = event.currentTarget;
  const email = form.elements.email.value;
  const password = form.elements.password.value;
  if (email === "" || password === "") {
    //wiem, że chodziło tu o bład w konsoli console.log("text") ale chciałem poeksperymentować :P
    // nie wiedziałem tylko jak kolor placeholdera zmienić poprzez JSa
    emailInput.setAttribute("placeholder", "Fill it!");
    passwordInput.setAttribute("placeholder", "Fill it!");
  } else {
    result.email = email;
    result.password = password;
    console.log(result);
    form.reset();
  }
}
