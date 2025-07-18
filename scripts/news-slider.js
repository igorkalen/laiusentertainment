/*
    Developed by: Igor Kalen
    Contact: igor@igorkalen.dev
    Date: July 15, 2025

    ---
    Copyright (c) 2025 Laius Group. All rights reserved.

    This code and its contents are proprietary to Laius Group. Unauthorized use,
    reproduction, distribution, or modification of any part of this code is strictly
    prohibited without explicit written permission from Laius Group.

    This code is intended solely for internal use by official Laius Group operations
    and deployment on verified domains and subdomains controlled by Laius Group.
    This restriction does not apply to domains or subdomains where customers have
    access to user-generated content, which may utilize parts of this code under
    specific agreements. 
 */
const slider = document.getElementById('newsSlider');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const indicatorsContainer = document.getElementById('newsIndicators');
const newsItems = slider.querySelectorAll('.news-item');
let currentIndex = 0;

newsItems.forEach((_, i) => {
    const dot = document.createElement('div');
    dot.className = 'indicator' + (i === 0 ? ' active' : '');
    dot.addEventListener('click', () => {
        currentIndex = i;
        scrollToIndex(currentIndex);
    });
    indicatorsContainer.appendChild(dot);
});

function updateButtons() {
    prevBtn.disabled = currentIndex === 0;
    nextBtn.disabled = currentIndex === newsItems.length - 1;
    [...indicatorsContainer.children].forEach((dot, i) => {
        dot.classList.toggle('active', i === currentIndex);
    });
}

function scrollToIndex(index) {
    const scrollAmount = newsItems[index].offsetLeft - (slider.clientWidth / 2) + (newsItems[index].offsetWidth / 2);
    slider.scrollTo({ left: scrollAmount, behavior: 'smooth' });
    updateButtons();
}

prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        scrollToIndex(currentIndex);
    }
});

nextBtn.addEventListener('click', () => {
    if (currentIndex < newsItems.length - 1) {
        currentIndex++;
        scrollToIndex(currentIndex);
    }
});

slider.addEventListener('scroll', () => {
    const center = slider.scrollLeft + slider.clientWidth / 2;
    let closestIndex = 0;
    let closestDistance = Infinity;
    newsItems.forEach((item, i) => {
        const itemCenter = item.offsetLeft + item.offsetWidth / 2;
        const distance = Math.abs(center - itemCenter);
        if (distance < closestDistance) {
            closestDistance = distance;
            closestIndex = i;
        }
    });
    if (closestIndex !== currentIndex) {
        currentIndex = closestIndex;
        updateButtons();
    }
});

scrollToIndex(0);
