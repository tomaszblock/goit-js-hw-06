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
    emailInput.setAttribute("placeholder", "Fill it!");
    passwordInput.setAttribute("placeholder", "Fill it!");
  } else {
    result.email = email;
    result.password = password;
    console.log(result);
    form.reset();
    emailInput.removeAttribute("placeholder");
    passwordInput.removeAttribute("placeholder");
  }
}
