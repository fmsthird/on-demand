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
