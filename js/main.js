// JavaScript para el carrusel de imágenes
let currentImageIndex = 0;
const carouselImages = document.querySelectorAll('.carousel-imagenes img');

function showImage(index) {
    carouselImages.forEach((img, i) => {
        img.style.display = (i === index) ? 'block' : 'none';
    });
}

function nextImage() {
    currentImageIndex = (currentImageIndex + 1) % carouselImages.length;
    showImage(currentImageIndex);
}

function prevImage() {
    currentImageIndex = (currentImageIndex - 1 + carouselImages.length) % carouselImages.length;
    showImage(currentImageIndex);
}

// Muestra la primera imagen inicialmente
showImage(currentImageIndex);

// JavaScript para el modal
let modal = document.getElementById("myModal");
let modalImg = document.getElementById("modalImage");
let images = document.querySelectorAll('.photo-gallery img');
let currentModalIndex = 0;

function openModal(imgElement) {
    modal.style.display = "block";
    modalImg.src = imgElement.src;
    currentModalIndex = Array.from(images).indexOf(imgElement);
}

function closeModal() {
    modal.style.display = "none";
}

function changeImage(step) {
    currentModalIndex = (currentModalIndex + step + images.length) % images.length;
    modalImg.src = images[currentModalIndex].src;
}

// Añadir eventos a las imágenes de la galería
images.forEach(img => {
    img.addEventListener('click', () => openModal(img));
});

// Añadir eventos de navegación del modal
document.querySelector('.prev').addEventListener('click', () => changeImage(-1));
document.querySelector('.next').addEventListener('click', () => changeImage(1));

// Cerrar el modal al hacer clic fuera de la imagen
modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        closeModal();
    }
});
