let currentCategory = 'All'; // Initialize the current category to 'All'

function filterADR(category, status, isCategoryChange = false) {
  var adrCards = document.querySelectorAll('.adr-card');
  var filterButtons = document.querySelectorAll('.filter-button');
  let hasVisibleCards = false;
  let adrLinks = document.getElementById('adr-links');
  // Hide the ADR links and show the loader
  adrLinks.style.display = 'none';

  if (isCategoryChange) {
    currentCategory = category; // Update the current category if a category change occurs
  } else {
    category = currentCategory; // Use the current category if no category change
  }

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
    if (
      (category === 'All' || categories.includes(category)) &&
      cardStatus === status
    ) {
      card.style.display = 'block';
      hasVisibleCards = true;
    } else {
      card.style.display = 'none';
    }
  });

  filterButtons.forEach(function (button) {
    var buttonText = button.textContent.trim(); // Trim whitespace
    button.classList.remove('active');
    if (buttonText === category) {
      button.classList.add('active');
    }
  });

  // Disable or enable sort functionality based on visibility of cards
  let sortList = document.getElementById('sort-list');
  if (hasVisibleCards) {
    sortList.classList.remove('disabled');
  } else {
    sortList.classList.add('disabled');
  }

  // Display a message if no ADR pages match the filter criteria
  let noAdrMessage = adrLinks.querySelector('.no-adr-message');
  if (!hasVisibleCards) {
    if (noAdrMessage) {
      noAdrMessage.remove();
    }
    adrLinks.innerHTML +=
      '<p class="no-adr-message">No ADR pages match the filter criteria.</p>';
  } else {
    // Remove the no ADR message if visible cards exist
    if (noAdrMessage) {
      noAdrMessage.remove();
    }
  }
  //Hide dropdown on click of an option
  if (!isCategoryChange) {
    onToggle('status-filter-list');
  }
  // Show the ADR links and hide the loader
  hideLoading();
  adrLinks.style.display = 'block';
}

// Ensure the filter function is called on page load with default category and status
document.addEventListener('DOMContentLoaded', () => {
  //Show the dropdown on page load
  onToggle('status-filter-list');
  filterADR('All', 'accepted');
});
