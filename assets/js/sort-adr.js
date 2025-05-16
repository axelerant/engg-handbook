function onToggle(elementId) {
  const dropdowns = document.querySelectorAll('.dropdown-menu');
  dropdowns.forEach((dropdown) => {
    if (dropdown.id !== elementId) {
      dropdown.classList.add('hidden');
    }
  });
  document.getElementById(elementId).classList.toggle('hidden');
}

function sortBy(sortType) {
  //Hide dropdown on click of an option
  onToggle('sort-list');

  let adrLinks = document.getElementById('adr-links');
  // Hide the ADR links and show the loader
  adrLinks.style.display = 'none';
  // Select all visible <a> elements within adr-links
  let visibleCards = Array.from(adrLinks.querySelectorAll('a')).filter(
    (card) => card.style.display !== 'none'
  );
  // If sort functionality is disabled, return early
  let sortList = document.getElementById('sort-list');
  if (sortList.classList.contains('disabled')) {
    hideLoading();
    adrLinks.style.display = 'block';
    return;
  }
  // Remove 'active' class from all sort items
  let sortItems = document.querySelectorAll('.sort-item');
  sortItems.forEach((item) => {
    item.classList.remove('active');
  });
  // Add 'active' class to the selected sort item
  let selectedSortItem = document.querySelector(
    `.sort-item[data-sort="${sortType}"]`
  );
  selectedSortItem.classList.add('active');

  switch (sortType) {
    case 'title-asc':
      visibleCards.sort((a, b) => {
        return a
          .querySelector('h2')
          .textContent.localeCompare(b.querySelector('h2').textContent);
      });
      break;
    case 'title-desc':
      visibleCards.sort((a, b) => {
        return b
          .querySelector('h2')
          .textContent.localeCompare(a.querySelector('h2').textContent);
      });
      break;
    case 'date-desc':
      visibleCards.sort((a, b) => {
        let dateA = new Date(a.querySelector('.adr-date span').textContent);
        let dateB = new Date(b.querySelector('.adr-date span').textContent);
        return dateB - dateA;
      });
      break;
    case 'date-asc':
      visibleCards.sort((a, b) => {
        let dateA = new Date(a.querySelector('.adr-date span').textContent);
        let dateB = new Date(b.querySelector('.adr-date span').textContent);
        return dateA - dateB;
      });
      break;
    default:
      // No sorting action needed
      break;
  }

  // Clear existing cards
  adrLinks.innerHTML = '';

  // Append sorted cards back to the list
  visibleCards.forEach((card) => {
    adrLinks.appendChild(card);
  });
  // Show the ADR links and and hide the loader
  hideLoading();
  adrLinks.style.display = 'block';
}
