let currentIndex = 0;
const images = document.querySelectorAll('.carousel-imagenes img');
const totalImages = images.length;

function showImage(index) {
    const carouselImages = document.querySelector('.carousel-imagenes');
    if (index >= totalImages) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = totalImages - 1;
    } else {
        currentIndex = index;
    }
    const offset = -currentIndex * 100;
    carouselImages.style.transform = `translateX(${offset}%)`;
}

function nextImage() {
    showImage(currentIndex + 1);
}

function prevImage() {
    showImage(currentIndex - 1);
}

document.addEventListener('DOMContentLoaded', () => {
    setInterval(nextImage, 5000); // Cambia la imagen cada 5 segundos
});

document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('.nav');

    menuToggle.addEventListener('click', function () {
        nav.classList.toggle('active');
    });
});

//Evento Formulario
document.getElementById("contactForm").addEventListener("submit", function(event){
    event.preventDefault(); // Evita que el formulario se envíe de manera tradicional

    // Muestra el mensaje de éxito usando SweetAlert
    swal("Enviado con éxito", "Tu mensaje ha sido enviado correctamente.", "success");

    // Borra los campos del formulario
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("message").value = "";
});

document.addEventListener('DOMContentLoaded', function () {
    const modal = document.getElementById("galleryModal");
    const modalImg = document.getElementById("modalImage");
    const closeBtn = document.querySelector(".close");
    const prevBtn = document.getElementById("prevModal");
    const nextBtn = document.getElementById("nextModal");
    const images = document.querySelectorAll(".gallery img");
    let currentIndex;

    images.forEach((img, index) => {
        img.addEventListener("click", function () {
            modal.style.display = "block";
            modalImg.src = this.src;
            currentIndex = index;
        });
    });

    closeBtn.addEventListener("click", function () {
        modal.style.display = "none";
    });

    prevBtn.addEventListener("click", function () {
        currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
        modalImg.src = images[currentIndex].src;
    });

    nextBtn.addEventListener("click", function () {
        currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
        modalImg.src = images[currentIndex].src;
    });

    modal.addEventListener("click", function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});


