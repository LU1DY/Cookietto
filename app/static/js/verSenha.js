const passwordClose = document.getElementById("passwordClose");
const passwordOpen = document.getElementById("passwordOpen");
const togglePasswordBtn = document.getElementById("togglePassword");
const passwordInput = document.getElementById("password");

function passwordVisible() {
  const type =
    passwordInput.getAttribute("type") === "password" ? "text" : "password";
  passwordInput.setAttribute("type", type);
}
togglePasswordBtn.addEventListener("click", passwordVisible);

function toggleVisibility() {
  if (passwordClose.classList.contains("none")) {
    passwordClose.classList.remove("none");
    passwordOpen.classList.add("none");
  } else {
    passwordClose.classList.add("none");
    passwordOpen.classList.remove("none");
  }
}
togglePasswordBtn.addEventListener("click", toggleVisibility);
