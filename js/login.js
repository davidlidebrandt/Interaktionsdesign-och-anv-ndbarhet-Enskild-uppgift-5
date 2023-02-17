const loginForm = document.querySelector(".loginForm");
const firstName = document.querySelector("#full_name");
const password = document.querySelector("#password");
const email = document.querySelector("#email");

function submitLogin() {
  alert(
    `Welcome ${firstName.value} with email ${email.value} and password ${password.value}, thank you for logging in.`
  );
  firstName.value = "";
  password.value = "";
  email.value = "";
}

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();
  submitLogin();
});
