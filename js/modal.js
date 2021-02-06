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
// (() => {
//   const refs = {
//     openModalBtn: document.querySelector('[data-open-menu]'),
//     closeModalBtn: document.querySelector('[data-close-menu]'),
//     modal: document.querySelector('[data-menu]'),
//   };

//   refs.openModalBtn.addEventListener('click', toggleModal);
//   refs.closeModalBtn.addEventListener('click', toggleModal);

//   function toggleModal() {
//     refs.modal.classList.toggle('backdrop--hidden');
//   }
// })();
// (() => {
//   const menuBtnRef = document.querySelector ("[data-menu-button]");
//   const mobileMenuRef = document.querySelector ("[data-menu]");
//   menuBtnRef.addEventListener("click", () =>  {
// const expended = 
// menuBtnRef.getAttribute("aria-expended") === "true" || false;
// menuBtnRef.classList.toggle("is-open");
// menuBtnRef.setAttribute("aria-expended", !expended);
// mobileMenuRef.classList.toggle("is-open");
//   });
// }
// )();

