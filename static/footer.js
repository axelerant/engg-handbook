document.addEventListener('DOMContentLoaded', () => {
  const footerAccordionHeaders = document.querySelectorAll(
    '.menu-icons-wrapper'
  );
  Array.from(footerAccordionHeaders).forEach((footerAccordionHeader) => {
    footerAccordionHeader.addEventListener('click', function () {
      this.parentElement.classList.toggle('active');
    });
  });
});
