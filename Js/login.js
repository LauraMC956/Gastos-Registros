// Redirect to password page on email submission
document.getElementById("loginForm")?.addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent form submission
    const email = document.getElementById("email").value;

    // console.log("escribiste el correo")
  
    // Save email to localStorage to use on the password page
    if (email) {
      localStorage.setItem("userEmail", email);
      window.location.href = "password.html"; // Redirect to password page
    } else {
      alert("Por favor, ingresa un correo válido.");
    }
  });
  
  // Handle password submission and redirect to welcome page
  document.getElementById("passwordForm")?.addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent form submission
    const password = document.getElementById("password").value;
  
    if (password) {
      // For simplicity, we're not validating the password here
      window.location.href = "welcome.html"; // Redirigir a la página de bienvenida.
    } else {
      alert("Por favor, ingresa tu contraseña.");
    }
  });
  