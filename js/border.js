const containers = document.querySelectorAll(".--img-container");

// Variable to keep track of the last clicked container
let lastClickedContainer = null;

// Add click event listeners to each container
containers.forEach((container) => {
  container.addEventListener("click", () => {
    if (lastClickedContainer) {
      lastClickedContainer.classList.remove("--black-border");
    }

    container.classList.add("--black-border");
    lastClickedContainer = container;
  });
});
