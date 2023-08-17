//menu bar js

const toolbarTrigger = () => {
  const toolbarListBtns = document.querySelectorAll(".--list-container");
  toolbarListBtns.forEach((button) => {
    button.addEventListener("click", (event) => {
      event.preventDefault();

      const toggleTarget = button.getAttribute("data-toggle-target");
      const targetContainer = document.querySelector(`.${toggleTarget}`);

      if (targetContainer) {
        toolbarListBtns.forEach((otherButton) => {
          if (otherButton !== button) {
            const otherToggleTarget =
              otherButton.getAttribute("data-toggle-target");
            const otherTargetContainer = document.querySelector(
              `.${otherToggleTarget}`
            );

            if (otherTargetContainer) {
              otherButton.classList.remove("active");
              otherTargetContainer.style.display = "";
            }
          }
        });

        button.classList.toggle("active");
        targetContainer.style.display =
          targetContainer.style.display === "flex" ? "" : "flex";
      }
    });
  });
};
// add border active to images below
const addBorderimg = () => {
  const containers = document.querySelectorAll(".--img-container");

  let lastClickedContainer = null;

  containers.forEach((container) => {
    container.addEventListener("click", () => {
      if (lastClickedContainer) {
        lastClickedContainer.classList.remove("--black-border");
      }

      container.classList.add("--black-border");
      lastClickedContainer = container;
    });
  });
};

//text-option js

const textEditoptions = () => {
  const textoptionbuttons = document.querySelectorAll(".--plus-icon-container");

  textoptionbuttons.forEach((buttons) => {
    buttons.addEventListener("click", (event) => {
      event.preventDefault();
      console.log(buttons);
    });
  });
};
// initialize functions
toolbarTrigger();
addBorderimg();
textEditoptions();
