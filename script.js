const navbar = document.querySelector('.nav-links');
const toggleButton = document.createElement('div');
toggleButton.classList.add('toggle-button');
toggleButton.innerHTML = '&#9776;'; // Hamburger icon
document.querySelector('.navbar').appendChild(toggleButton);

toggleButton.addEventListener('click', () => {
    navbar.classList.toggle('active');
});




const slides = document.querySelector('.slides');
let slideIndex = 0;

function showNextSlide() {
    const slidesArray = slides.children;
    for (let i = 0; i < slidesArray.length; i++) {
        slidesArray[i].style.display = 'none';
    }
    slideIndex = (slideIndex + 1) % slidesArray.length;
    slidesArray[slideIndex].style.display = 'block';
}

setInterval(showNextSlide, 3000);

// Initially display the first slide
document.addEventListener("DOMContentLoaded", function() {
    slides.children[0].style.display = 'block';
});

document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelectorAll(".slide");
    let currentSlide = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.remove("active");
            if (i === index) slide.classList.add("active");
        });
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    // Initialize the slider
    showSlide(currentSlide);

    // Auto-slide every 5 seconds
    setInterval(nextSlide, 5000);
});



