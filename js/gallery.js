// gallery.js
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
