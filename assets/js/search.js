const searchButton = document.querySelector(".projets .search-button");
const searchInput = document.querySelector(".projets .search-input");
const projectItemList = document.querySelectorAll(".projets .project-item");

searchButton.addEventListener("click", function() {
    updateProjectsVisibility();
});

searchInput.addEventListener("keyup", function(event) {
    if (event.key == "Enter") {
        updateProjectsVisibility();
    }
})

function updateProjectsVisibility() {
    let searchValue = searchInput.value;
    searchValue = searchValue.toLowerCase();

    projectItemList.forEach(item => updateProjectItemVisibility(item, searchValue));
    updateSlider();
}

function updateProjectItemVisibility(projectItem, searchValue) {
    let projectTitle = projectItem.querySelector(".project-title").innerText;
    projectTitle = projectTitle.toLowerCase();
    
    if (projectTitle.includes(searchValue)) {
        projectItem.style.display = "block";
    } else {
        projectItem.style.display = "none";
    }
}