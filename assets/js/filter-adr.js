function filterADR(category) {
  var adrCards = document.querySelectorAll('.adr-card');
  var filterButtons = document.querySelectorAll('.filter-button');

  adrCards.forEach(function (card) {
    var categories = card.getAttribute('data-categories').split(' ');
    card.style.display =
      category === 'All' || categories.includes(category) ? 'block' : 'none';
  });

  filterButtons.forEach(function (button) {
    var buttonText = button.textContent.trim(); // Trim whitespace
    button.classList.remove('active');
    if (buttonText === category) {
      button.classList.add('active');
    }
  });
}
