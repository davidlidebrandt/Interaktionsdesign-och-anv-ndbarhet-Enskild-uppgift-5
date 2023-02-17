const signUpButton = document.querySelector(".signUpButton");
const userName = document.querySelector("#user_name");
const password = document.querySelector("#password");
const email = document.querySelector("#email");
const passwordIndicator = document.querySelector(".password_indicator");

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

password.addEventListener("change", (event)=> {
    const containsNumbers = /(?=.*[0-9])/.test(password.value);
    const containsSpecialCharacters = /(?=.*[!@#$%^&*])/.test(password.value);
    const longEnoughPassword = password.value.length > 7;
    
    if(longEnoughPassword && containsNumbers && containsSpecialCharacters) {
        passwordIndicator.textContent = "Strong password";
        passwordIndicator.classList.add("green-text");
        passwordIndicator.classList.remove("red-text");
        return;
    }
    
    passwordIndicator.classList.remove("green-text");
    passwordIndicator.classList.add("red-text");
    passwordIndicator.textContent = "Weak password, must be at least 8 characters, contain a number and special character";
});
