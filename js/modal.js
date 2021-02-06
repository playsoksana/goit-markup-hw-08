(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-open-modal]'),
    closeModalBtn: document.querySelector('[data-close-modal]'),
    modal: document.querySelector('[data-backdrop]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('backdrop--hidden');
  }
})();


    (() => {
   const setup = (name) => {
        const backdrop = document.querySelector(`[data-backdrop-${name}]`);
        const buttons = document.querySelectorAll(
          `[data-toggle-backdrop-${name}]`
        );
        const toggleBackdrop = () => backdrop.classList.toggle("menu--hidden");
        buttons.forEach((button) =>
          button.addEventListener("click", toggleBackdrop)
        );
      };
      setup("schedule");
      setup("menu");
  }
)();