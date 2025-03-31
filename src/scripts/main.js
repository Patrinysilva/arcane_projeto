document.addEventListener("DOMContentLoaded", function () {
    const carousel = document.querySelector(".inicio__carousel__container");
    const prevButton = document.querySelector(".inicio__carousel__btn--prev");
    const nextButton = document.querySelector(".inicio__carousel__btn--next");
    const items = document.querySelectorAll(".inicio__carousel__item");
    let currentIndex = 0;

    function updateCarousel() {
        const itemWidth = items[0].clientWidth;
        carousel.style.transform = `translateX(${-currentIndex * itemWidth}px)`;
    }

    nextButton.addEventListener("click", function () {
        if (currentIndex < items.length - 1) {
            currentIndex++;
            updateCarousel();
        }
    });

    prevButton.addEventListener("click", function () {
        if (currentIndex > 0) {
            currentIndex--;
            updateCarousel();
        }
    });
});