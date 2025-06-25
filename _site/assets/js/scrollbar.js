const projectList = document.querySelector('.project-list');
const slider = document.querySelector('.slider');
const slide = document.querySelector('.slide');

const upButton = document.querySelector(".up-arrow-button");
const downButton = document.querySelector(".down-arrow-button");

upButton.addEventListener("click", function() {
    projectList.scrollBy({
        top: -(projectList.scrollHeight * 0.05)
    });
})

downButton.addEventListener("click", function() {
    projectList.scrollBy({
        top: projectList.scrollHeight * 0.05
    });
})

function updateSlider() {
    const heightRatio = projectList.clientHeight / projectList.scrollHeight;
    slider.style.height = `${heightRatio * slide.clientHeight - 4}px`; // -4 pour les bords du slider
    slider.style.top = `${(projectList.scrollTop / projectList.scrollHeight) * slide.clientHeight}px`;
}

projectList.addEventListener('scroll', updateSlider);
window.addEventListener('resize', updateSlider);
updateSlider();

let isDragging = false;
let startY, startScrollTop;

slider.addEventListener('mousedown', (e) => {
    isDragging = true;
    startY = e.clientY;
    startScrollTop = projectList.scrollTop;
    document.body.style.userSelect = 'none';
});

document.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    const deltaY = e.clientY - startY;
    const scrollRatio = projectList.scrollHeight / slide.clientHeight;
    projectList.scrollTop = startScrollTop + deltaY * scrollRatio;
});

document.addEventListener('mouseup', () => {
    isDragging = false;
    document.body.style.userSelect = '';
});

window.addEventListener('load', () => {
    updateSlider();
});