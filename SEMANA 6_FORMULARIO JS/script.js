const nombre = document.getElementById("nombre");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");
const edad = document.getElementById("edad");
const btnEnviar = document.getElementById("btnEnviar");

const nombreError = document.getElementById("nombreError");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");
const confirmPasswordError = document.getElementById("confirmPasswordError");
const edadError = document.getElementById("edadError");

function validarNombre() {
  if (nombre.value.length < 3) {
    nombreError.textContent = "El nombre debe tener al menos 3 caracteres.";
    return false;
  }
  nombreError.textContent = "";
  return true;
}

function validarEmail() {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!regex.test(email.value)) {
    emailError.textContent = "Correo no válido.";
    return false;
  }
  emailError.textContent = "";
  return true;
}

function validarPassword() {
  const regex = /^(?=.*[0-9])(?=.*[!@#$%^&*])/;
  if (password.value.length < 8 || !regex.test(password.value)) {
    passwordError.textContent = "Debe tener mínimo 8 caracteres, un número y un carácter especial.";
    return false;
  }
  passwordError.textContent = "";
  return true;
}

function validarConfirmPassword() {
  if (confirmPassword.value !== password.value) {
    confirmPasswordError.textContent = "Las contraseñas no coinciden.";
    return false;
  }
  confirmPasswordError.textContent = "";
  return true;
}

function validarEdad() {
  if (Number(edad.value) < 18) {
    edadError.textContent = "Debes tener al menos 18 años.";
    return false;
  }
  edadError.textContent = "";
  return true;
}

function validarFormulario() {
  const valido =
    validarNombre() &&
    validarEmail() &&
    validarPassword() &&
    validarConfirmPassword() &&
    validarEdad();

  btnEnviar.disabled = !valido;
}

[nombre, email, password, confirmPassword, edad].forEach((input) => {
  input.addEventListener("input", validarFormulario);
});

document.getElementById("registroForm").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Formulario enviado exitosamente 🎉");
  this.reset();
  btnEnviar.disabled = true;
});
