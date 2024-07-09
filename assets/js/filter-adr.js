function filterADR(category, status) {
  var adrCards = document.querySelectorAll('.adr-card');
  var filterButtons = document.querySelectorAll('.filter-button');

  // Remove 'active' class from all status filter items
  let statusFilterItems = document.querySelectorAll('.status-filter-item');
  statusFilterItems.forEach(function (item) {
    item.classList.remove('active');
  });

  // Add 'active' class to the selected status filter item
  let selectedStatusItem = document.querySelector(
    `.status-filter-item[data-status="${status}"]`,
  );
  selectedStatusItem.classList.add('active');

  adrCards.forEach(function (card) {
    var categories = card.getAttribute('data-categories').split(' ');
    var cardStatus = card.querySelectorAll('.adr-status')[0].outerText.trim();
    card.style.display =
      (category === 'All' || categories.includes(category)) &&
      cardStatus === status
        ? 'block'
        : 'none';
  });

  filterButtons.forEach(function (button) {
    var buttonText = button.textContent.trim(); // Trim whitespace
    button.classList.remove('active');
    if (buttonText === category) {
      button.classList.add('active');
    }
  });
}

// Ensure the filter function is called on page load with default category and status
document.addEventListener('DOMContentLoaded', () => {
  filterADR('All', 'accepted');
});
