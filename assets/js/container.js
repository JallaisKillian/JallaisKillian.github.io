const mainDiv = document.querySelector(".main-container");
const glass = document.querySelector(".main-container .glass");
const reduceButton = mainDiv.querySelector(".reduce-button");

const scale = 0.2;
const reducedHeight = mainDiv.clientHeight * scale;
const marginTop = window.innerHeight - reducedHeight;

const style = document.createElement('style');
style.textContent = `
.main-container.reduced {
    scale: ${scale};
    margin-top: calc(${marginTop}px - 2rem);
    cursor: pointer;
}
`;
document.head.appendChild(style);

reduceButton.addEventListener("click", function() {
    mainDiv.classList.add("reduced");
    glass.classList.remove("hidden");
});

glass.addEventListener("click", function() {
    mainDiv.classList.remove("reduced");
    glass.classList.add("hidden");
})

