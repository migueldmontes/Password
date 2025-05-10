// Datos del usuario y contraseña correctos
const correctUsername = "usuario";
const correctPassword = "contraseña";

// Número máximo de intentos
let attempts = 0;

const form = document.getElementById("loginForm");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const errorMessage = document.getElementById("error-message");

// Función para manejar el envío del formulario
form.addEventListener("submit", function(event) {
  event.preventDefault(); // Evitar el envío por defecto

  const username = usernameInput.value;
  const password = passwordInput.value;

  // Verificar si el usuario y la contraseña son correctos
  if (username === correctUsername && password === correctPassword) {
    // Acceso permitido, abrir otra página
    window.open("https://www.w3schools.com");
  } else {
    // Incrementar el número de intentos
    attempts++;

    // Mostrar mensaje de error
    errorMessage.textContent = "Usuario o contraseña incorrectos.";

    // Si se alcanza el número máximo de intentos, cerrar la ventana
    if (attempts >= 3) {
      alert("Has alcanzado el número máximo de intentos. La página se cerrará.");
      window.close(); // Cierra la página
    }
  }
});
