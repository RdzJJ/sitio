const carouselImages = document.querySelector('.carousel-images');
const images = document.querySelectorAll('.carousel-images img');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

let index = 0;

function showImage(index) {
    const width = images[0].clientWidth;
    carouselImages.style.transform = `translateX(${-index * width}px)`;
}

prevButton.addEventListener('click', () => {
    index = (index > 0) ? index - 1 : images.length - 1;
    showImage(index);
});

nextButton.addEventListener('click', () => {
    index = (index < images.length - 1) ? index + 1 : 0;
    showImage(index);
});

// Ajustar el tamaño al cambiar el tamaño de la ventana
window.addEventListener('resize', () => showImage(index));