// De.js
document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelectorAll(".slider .slide"); 
    const nextBtn = document.querySelector(".next-btn");
    const prevBtn = document.querySelector(".prev-btn");
    const sliderContainer = document.querySelector(".slider"); 

    let currentIndex = 0;
    let slideInterval;

    // Hàm hiển thị slide
    function showSlide(index) {
        // Xóa active
        slides.forEach((slide) => slide.classList.remove("active"));

        
        if (index >= slides.length) {
            currentIndex = 0;
        } else if (index < 0) {
            currentIndex = slides.length - 1;
        } else {
            currentIndex = index;
        }

        // Thêm active
        slides[currentIndex].classList.add("active");
    }

    // Chuyển slide
    function nextSlide() {
        showSlide(currentIndex + 1);
    }

    function prevSlide() {
        showSlide(currentIndex - 1);
    }

    // Tự động chạy
    function startAutoSlide() {
        
        stopAutoSlide(); 
        slideInterval = setInterval(nextSlide, 5000); 
    }

    function stopAutoSlide() {
        clearInterval(slideInterval);
    }

    
    nextBtn.addEventListener("click", nextSlide);
    prevBtn.addEventListener("click", prevSlide);

    // Chạy slider
    startAutoSlide();

    // Dừng khi hover vào KHUNG SLIDER, chạy lại khi rê chuột ra ngoài
    if (sliderContainer) {
        sliderContainer.addEventListener("mouseenter", stopAutoSlide);
        sliderContainer.addEventListener("mouseleave", startAutoSlide);
    }
});