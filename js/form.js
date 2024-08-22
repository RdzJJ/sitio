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
