const signUpForm = document.querySelector(".signUpForm");
const userName = document.querySelector("#user_name");
const fullName = document.querySelector("#name");
const password = document.querySelector("#password");
const email = document.querySelector("#email");
const passwordIndicator = document.querySelector(".password_indicator");

function submitSignUp() {
  alert(
    `Welcome ${fullName.value} with username ${userName.value}, email ${email.value} and password ${password.value}, thank you for signing up.`
  );
  userName.value = "";
  fullName.value = "";
  password.value = "";
  email.value = "";
  passwordIndicator.textContent = "";
}

signUpForm.addEventListener("submit", (event) => {
  event.preventDefault();
  submitSignUp();
});

password.addEventListener("change", (event)=> {
    const containsNumbers = /(?=.*[0-9])/.test(password.value);
    const containsSpecialCharacters = /(?=.*[!@#$%^&*])/.test(password.value);
    const longEnoughPassword = password.value.length > 7;
    passwordIndicator.classList.add("mb-2");
    
    if(longEnoughPassword && containsNumbers && containsSpecialCharacters) {
        passwordIndicator.textContent = "Strong password";
        passwordIndicator.classList.add("text-green-400");
        passwordIndicator.classList.remove("text-red-400");
        return;
    }
    
    passwordIndicator.classList.remove("text-green-400");
    passwordIndicator.classList.add("text-red-400");
    passwordIndicator.textContent = "Weak password, should be at least 8 characters, contain a number and special character";
});
