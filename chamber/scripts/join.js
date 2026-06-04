const timestamp = document.querySelector("#timestamp");

if (timestamp) {
    timestamp.value =
        new Date().toISOString();
}

const modalButtons = document.querySelectorAll("[data-modal]");

modalButtons.forEach(button => {
    button.addEventListener("click", () => {
        const modalId = button.dataset.modal;
        const modal = document.querySelector(`#${modalId}`);
        modal.showModal();
    });
});

const closeButtons = document.querySelectorAll(".close-modal");

closeButtons.forEach(button => {
    button.addEventListener("click", () => {
        button.closest("dialog").close();
    });
});