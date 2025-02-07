function closeModal(modal) {
  modal.classList.remove("flex");
  modal.classList.add("hidden");
}

function openModal(modal) {
  modal.classList.remove("hidden");
  modal.classList.add("flex");
  console.log("open modal");
}

function setModalEvents(handleId, modalId) {
  const handle = document.querySelector(
    '[data-open-modal-id="open-modal-map"]'
  );
  const modal = document.querySelector('[data-modal-id="modal-map"]');
  const cross = modal.querySelector('[data-modal="cross"]');

  handle.addEventListener("click", () => openModal(modal));
  cross.addEventListener("click", () => closeModal(modal));

  modal.addEventListener("click", (e) => {
    if (!e.target.closest('[data-modal="window"]')) closeModal(modal);
  });
}

setModalEvents("open-modal-map", "modal-map");
