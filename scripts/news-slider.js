 /*
    Developed by: Igor Kalen  
    Contact: igor@igorkalen.dev  
    Creation Date: July 31, 2025  
    Last Updated: August 1, 2025
    Version: 1.0.0
    Status: READY FOR RELEASE
    File: news-slider.js

    ----
    © 2025 Laius Entertainment. All rights reserved.

    This code is the exclusive property of Laius Entertainment.  
    Unauthorized use, copying, distribution, or modification  
    is strictly prohibited.

    For internal use only on systems, services, and domains  
    officially managed by Laius Entertainment.
 */      
      
let currentSlide = 0;
        const slider = document.getElementById('newsSlider');
        const prevBtn = document.getElementById('prevBtn');
        const nextBtn = document.getElementById('nextBtn');
        const indicators = document.querySelectorAll('.indicator');
        const totalSlides = document.querySelectorAll('.news-card').length;
        const maxSlide = totalSlides - 1;

        function updateSlider() {
            const translateX = -(currentSlide * 100);
            slider.style.transform = `translateX(${translateX}%)`;
            
            indicators.forEach((indicator, index) => {
                indicator.classList.toggle('active', index === currentSlide);
            });
            
            prevBtn.disabled = currentSlide === 0;
            nextBtn.disabled = currentSlide >= maxSlide;
        }

        function nextSlide() {
            if (currentSlide < maxSlide) {
                currentSlide++;
                updateSlider();
            }
        }

        function prevSlide() {
            if (currentSlide > 0) {
                currentSlide--;
                updateSlider();
            }
        }

        function goToSlide(index) {
            currentSlide = Math.min(index, maxSlide);
            updateSlider();
        }

        nextBtn.addEventListener('click', nextSlide);
        prevBtn.addEventListener('click', prevSlide);
        
        indicators.forEach((indicator, index) => {
            indicator.addEventListener('click', () => goToSlide(index));
        });

        updateSlider();