// Manejar el registro
document.getElementById('registerForm').addEventListener('submit', function (e) {
    e.preventDefault();

    let firstname = document.getElementById('registerFirstname').value;
    let lastname = document.getElementById('registerLastname').value;
    let username = document.getElementById('registerUsername').value;
    let password = document.getElementById('registerPassword').value;

    // Guardar el usuario en el Local Storage
    localStorage.setItem(username, password);

    document.getElementById('message').textContent = "Registro exitoso!";
    document.getElementById('message').style.color = "green";
});

// Manejar el login
window.onload = function () {
    document.getElementById('loginForm').addEventListener('submit', function (e) {
        e.preventDefault();  // Prevenir el comportamiento por defecto del formulario

        let username = document.getElementById('loginUsername').value;
        let password = document.getElementById('loginPassword').value;
        let message = document.getElementById('message');
        let loginButton = document.querySelector('button');

        // Verificar si el usuario existe y la contraseña coincide
        if (localStorage.getItem(username) == password) {
            message.textContent = "¡Inicio de sesión exitoso!";
            message.style.color = "green";

            // Eliminar cualquier clase de animación previa
            loginButton.classList.remove('correcto');

            // Forzar el reflujo para reiniciar la animación
            void loginButton.offsetWidth;

            // Añadir la clase de animación al botón
            loginButton.classList.add('correcto');

            // Redirigir a otra página después de la animación
            setTimeout(function () {
                window.location.href = "/index.html"; // Cambia "home.html" por la URL de la página a la que quieras redirigir
            }, 1000);
        } else {
            message.textContent = "Usuario o contraseña incorrectos.";
            message.style.color = "red";
        }
    });
};

