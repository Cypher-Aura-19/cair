console.log("CAIR Website Loaded");

// Carousel Logic
document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.carousel-slide');
    const dots = document.querySelectorAll('.nav-dot');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    let currentIndex = 1; // Start at center (hero banner)
    const totalSlides = slides.length;

    function updateCarousel() {
        console.log("Updating slider to index:", currentIndex);

        slides.forEach((slide, index) => {
            slide.className = 'carousel-slide'; // Reset

            // Calculate relative position
            if (index === currentIndex) {
                slide.classList.add('active');
            } else if (index === (currentIndex - 1 + totalSlides) % totalSlides) {
                slide.classList.add('prev');
            } else if (index === (currentIndex + 1) % totalSlides) {
                slide.classList.add('next');
            } else {
                // Determine if hidden left or right for smooth transitioning if needed
                // Simple logic: everything else hidden
            }
        });

        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentIndex);
        });
    }

    function moveNext() {
        currentIndex = (currentIndex + 1) % totalSlides;
        updateCarousel();
    }

    function movePrev() {
        currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
        updateCarousel();
    }

    // Event Listeners
    nextBtn.addEventListener('click', moveNext);
    prevBtn.addEventListener('click', movePrev);

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentIndex = index;
            updateCarousel();
        });
    });

    // Auto Play (optional, slow)
    setInterval(moveNext, 5000);

    // Initial call to set correct states (prev/active/next)
    updateCarousel();
});
