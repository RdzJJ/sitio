// form.js
document.getElementById("contactForm").addEventListener("submit", function(event){
    event.preventDefault(); // Evita que el formulario se envíe de manera tradicional

    // Muestra el mensaje de éxito usando SweetAlert
    swal("Enviado con éxito", "Tu mensaje ha sido enviado correctamente.", "success");

    // Borra los campos del formulario
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("message").value = "";
});

document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Evita que el formulario se envíe de manera tradicional

    const form = event.target;
    const formData = new FormData(form);

    fetch(form.action, {
        method: form.method,
        body: formData,
        headers: {
            'Accept': 'application/json'
        }
    }).then(response => {
        if (response.ok) {
            // Aquí puedes agregar tu lógica de animación para un envío exitoso
            form.reset(); // Resetea el formulario
        } else {
            response.json().then(data => {
                if (Object.hasOwn(data, 'errors')) {
                    // Aquí puedes agregar tu lógica de animación para errores en la respuesta
                } else {
                    // Aquí puedes agregar tu lógica de animación para cualquier otro problema
                }
            })
        }
    }).catch(error => {
        // Aquí puedes agregar tu lógica de animación para manejar errores de red u otros problemas
    });
});