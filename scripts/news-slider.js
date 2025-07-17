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
