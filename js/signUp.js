const signUpButton = document.querySelector(".signUpButton");
const firstName = document.querySelector("#full_name");
const password = document.querySelector("#password");
const email = document.querySelector("#email");

function submitSignUp() {
  alert(
    `Welcome ${firstName.value} with email ${email.value} and password ${password.value}, thank you for signing up.`
  );
  firstName.value = "";
  password.value = "";
  email.value = "";
}

signUpButton.addEventListener("click", (event) => {
  event.preventDefault();
  submitSignUp();
});
