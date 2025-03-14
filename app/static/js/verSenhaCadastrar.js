const passwordClose = document.getElementById("passwordClose");
const passwordOpen = document.getElementById("passwordOpen");
const passwordConfirmClose = document.getElementById("passwordConfirmClose");
const passwordConfirmOpen = document.getElementById("passwordConfirmOpen");
const togglePasswordBtn = document.getElementById("togglePassword");
const togglePasswordConfirmBtn = document.getElementById(
  "togglePasswordConfirm"
);
const passwordInput = document.getElementById("password");
const passwordConfirmInput = document.getElementById("confirmPassword");

function passwordVisible() {
  const type =
    passwordInput.getAttribute("type") === "password" ? "text" : "password";
  passwordInput.setAttribute("type", type);
}
togglePasswordBtn.addEventListener("click", passwordVisible);

function passwordConfirmVisible() {
  const type =
    passwordConfirmInput.getAttribute("type") === "password"
      ? "text"
      : "password";
  passwordConfirmInput.setAttribute("type", type);
}
togglePasswordConfirmBtn.addEventListener("click", passwordConfirmVisible);

function toggleVisibility() {
  if (passwordClose.classList.contains("none")) {
    passwordClose.classList.remove("none");
    passwordOpen.classList.add("none");
  } else {
    passwordClose.classList.add("none");
    passwordOpen.classList.remove("none");
  }
}
function toggleConfirmVisibility() {
  if (passwordConfirmClose.classList.contains("none")) {
    passwordConfirmClose.classList.remove("none");
    passwordConfirmOpen.classList.add("none");
  } else {
    passwordConfirmClose.classList.add("none");
    passwordConfirmOpen.classList.remove("none");
  }
}
togglePasswordBtn.addEventListener("click", toggleVisibility);
togglePasswordConfirmBtn.addEventListener("click", toggleConfirmVisibility);
