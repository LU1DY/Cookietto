const inputUsername = document.getElementById("username");
const inputEmail = document.getElementById("email");
const inputPassword = document.getElementById("password");
const inputConfirmPassword = document.getElementById("confirmPassword");
const btnSubmitCriarConta = document.getElementById("btn_submit_criar_conta");
const errorElement = document.querySelectorAll(".errorJS");

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function applyErrorStyles(element) {
  element.style.border = "1px solid #ed0909";
  element.style.backgroundColor = "#ed090917";
  element.style.boxShadow = "0px 0px 3px 3px #ed090917";
}

function removeErrorStyles(element) {
  element.style.border = "";
  element.style.backgroundColor = "";
  element.style.boxShadow = "";
}

function messageError(message, errorElement) {
  errorElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M480.42-294.04q11.54 0 19.75-8.22t8.21-19.86v-169.19q0-11.41-8.24-19.65-8.23-8.23-19.65-8.23-11.64 0-19.85 8.23-8.22 8.24-8.22 19.65v169.19q0 11.64 8.23 19.86 8.22 8.22 19.77 8.22Zm-.53-291.19q13.23 0 22.01-8.68 8.79-8.69 8.79-21.91t-8.68-22.01q-8.68-8.78-21.9-8.78-13.23 0-22.01 8.68-8.79 8.68-8.79 21.9 0 13.22 8.68 22.01 8.68 8.79 21.9 8.79Zm.2 477.15q-77.15 0-145.06-29.32-67.92-29.33-118.16-79.6-50.23-50.27-79.51-118.05-29.28-67.79-29.28-144.86 0-77.15 29.32-145.06 29.33-67.92 79.6-118.16 50.27-50.23 118.05-79.51 67.79-29.28 144.86-29.28 77.15 0 145.06 29.32 67.92 29.33 118.16 79.6 50.23 50.27 79.51 118.05 29.28 67.79 29.28 144.86 0 77.15-29.32 145.06-29.33 67.92-79.6 118.16-50.27 50.23-118.05 79.51-67.79 29.28-144.86 29.28Zm-.1-55.96q131.89 0 223.93-92.02 92.04-92.03 92.04-223.93 0-131.89-92.02-223.93-92.03-92.04-223.93-92.04-131.89 0-223.93 92.02-92.04 92.03-92.04 223.93 0 131.89 92.02 223.93 92.03 92.04 223.93 92.04ZM480-480Z"/></svg> ${message}`;
}

function clearErrorOnInput(inputField, errorElement) {
  inputField.addEventListener("input", function () {
    removeErrorStyles(inputField.parentElement);
    errorElement.innerHTML = "";
  });
}

function verifyInputForm() {
  // VERIFICA O CAMPO DE NOME
  const inputUsernameValue = inputUsername.value;
  if (inputUsernameValue === "") {
    applyErrorStyles(inputUsername.parentElement);
    messageError("Informe seu nome!", errorElement[0]);
  } else {
    removeErrorStyles(errorElement[0]);
  }

  // VERIFICA O CAMPO DE E-MAIL
  const inputEmailValue = inputEmail.value;
  if (inputEmailValue === "") {
    messageError("Informe seu e-mail!", errorElement[1]);
    applyErrorStyles(inputEmail.parentElement);
  } else if (!emailPattern.test(inputEmailValue)) {
    messageError("Informe um e-mail válido!", errorElement[1]);
    applyErrorStyles(inputEmail.parentElement);
  } else {
    removeErrorStyles(inputEmail.parentElement);
  }

  // VERIFICA O PRIMEIRO CAMPO DE SENHA
  const inputPasswordValue = inputPassword.value;
  const inputConfirmPasswordValue = inputConfirmPassword.value;
  if (inputPasswordValue === "") {
    messageError("Informe sua senha!", errorElement[2]);
    applyErrorStyles(inputPassword.parentElement);
  } else if (inputPasswordValue.length < 8 || inputPasswordValue.length > 20) {
    messageError("A senha deve ter de 8 a 20 caracteres!", errorElement[2]);
    applyErrorStyles(inputPassword.parentElement);
  } else if (inputPasswordValue != inputConfirmPasswordValue) {
    messageError("Os campos de senha precisam ser iguais", errorElement[2]);
    applyErrorStyles(inputPassword.parentElement);
  } else {
    removeErrorStyles(inputPassword.parentElement);
  }

  // VERIFICA O PRIMEIRO CAMPO DE CONFIRMAÇÃO DE SENHA
  if (inputConfirmPasswordValue === "") {
    messageError("Confirme sua senha!", errorElement[3]);
    applyErrorStyles(inputConfirmPassword.parentElement);
  } else if (
    inputConfirmPasswordValue.length < 8 ||
    inputConfirmPasswordValue.length > 20
  ) {
    messageError("A senha deve ter de 8 a 20 caracteres!", errorElement[3]);
    applyErrorStyles(inputConfirmPassword.parentElement);
  } else if (inputPasswordValue != inputConfirmPasswordValue) {
    messageError("Os campos de senha precisam ser iguais", errorElement[3]);
    applyErrorStyles(inputConfirmPassword.parentElement);
  } else {
    removeErrorStyles(inputConfirmPassword.parentElement);
  }

  clearErrorOnInput(inputUsername, errorElement[0]);
  clearErrorOnInput(inputEmail, errorElement[1]);
  clearErrorOnInput(inputPassword, errorElement[2]);
  clearErrorOnInput(inputConfirmPassword, errorElement[3]);
}

btnSubmitCriarConta.addEventListener("click", verifyInputForm);
