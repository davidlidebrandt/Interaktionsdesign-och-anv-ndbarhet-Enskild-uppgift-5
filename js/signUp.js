const signUpButton = document.querySelector(".signUpButton");
const userName = document.querySelector("#user_name");
const password = document.querySelector("#password");
const email = document.querySelector("#email");

function submitSignUp() {
  alert(
    `Welcome ${userName.value} with email ${email.value} and password ${password.value}, thank you for signing up.`
  );
  userName.value = "";
  password.value = "";
  email.value = "";
}

signUpButton.addEventListener("click", (event) => {
  event.preventDefault();
  submitSignUp();
});
