const loginForm = document.querySelector(".loginForm");
const userName = document.querySelector("#user_name");
const password = document.querySelector("#password");
const email = document.querySelector("#email");

function submitLogin() {
  alert(
    `Welcome ${userName.value} with email ${email.value} and password ${password.value}, thank you for logging in.`
  );
  userName.value = "";
  password.value = "";
  email.value = "";
}

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();
  submitLogin();
});
