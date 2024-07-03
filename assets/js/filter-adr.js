function filterADR(category) {
  var adrCards = document.querySelectorAll('.adr-card');
  var filterButtons = document.querySelectorAll('.filter-button');

  adrCards.forEach(function (card) {
    var categories = card.getAttribute('data-categories').split(' ');
    if (category === 'All' || categories.includes(category)) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });

  filterButtons.forEach(function (button) {
    var buttonText = button.textContent.trim(); // Trim whitespace
    if (buttonText === category) {
      button.classList.add('active');
    } else if (category === 'All' && buttonText === 'All') {
      button.classList.add('active');
    } else {
      button.classList.remove('active');
    }
  });
}
