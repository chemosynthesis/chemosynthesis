// Step 1: Get DOM Elements
const nextBtn = document.getElementById('next');
const prevBtn = document.getElementById('prev');

const carousel = document.querySelector('.carousel');
const slider = carousel.querySelector('.list');
const thumbnailContainer = carousel.querySelector('.thumbnail');
const thumbnailItems = thumbnailContainer.querySelectorAll('.item');
const timeIndicator = carousel.querySelector('.time');

let timeRunning = 3000;
let timeAutoNext = 7000;

let runTimeout;
let runNextAuto;

// Initialize active slide and thumbnail
let currentIndex = 0;
const totalItems = slider.querySelectorAll('.item').length;

function initializeCarousel() {
    updateActiveSlide();
    startAutoSlide();
}

// Event Listeners for Navigation Buttons
nextBtn.addEventListener('click', () => {
    showSlider('next');
    resetAutoSlide();
});

prevBtn.addEventListener('click', () => {
    showSlider('prev');
    resetAutoSlide();
});

// Event Listeners for Thumbnails
thumbnailItems.forEach((thumbnail, index) => {
    thumbnail.addEventListener('click', () => {
        navigateToSlide(index);
        resetAutoSlide();
    });
});

function showSlider(direction) {
    if (direction === 'next') {
        currentIndex = (currentIndex + 1) % totalItems;
    } else if (direction === 'prev') {
        currentIndex = (currentIndex - 1 + totalItems) % totalItems;
    }
    updateActiveSlide();
}

function navigateToSlide(index) {
    currentIndex = index;
    updateActiveSlide();
}

function updateActiveSlide() {
    const slides = slider.querySelectorAll('.item');
    const thumbnails = thumbnailContainer.querySelectorAll('.item');

    slides.forEach((slide, index) => {
        if (index === currentIndex) {
            slide.classList.add('active');
        } else {
            slide.classList.remove('active');
        }
    });

    thumbnails.forEach((thumb, index) => {
        if (index === currentIndex) {
            thumb.classList.add('active');
        } else {
            thumb.classList.remove('active');
        }
    });
}

function startAutoSlide() {
    runNextAuto = setInterval(() => {
        showSlider('next');
    }, timeAutoNext);
}

function resetAutoSlide() {
    clearInterval(runNextAuto);
    startAutoSlide();
}

// Initialize Carousel on Page Load
window.addEventListener('DOMContentLoaded', initializeCarousel);

// Additional: Handle Header Background on Scroll
window.addEventListener('scroll', function () {
    const header = document.querySelector('.header');
    header.classList.toggle('scrolled', window.scrollY > 0);
});
