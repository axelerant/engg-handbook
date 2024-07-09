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
  let adrLinks = document.getElementById('adr-links');
  // Select all elements with class 'adr-links' and convert NodeList to array
  let adrEntries = Array.from(adrLinks.querySelectorAll('a'));
  // Remove 'active' class from all sort items
  let sortItems = document.querySelectorAll('.sort-item');
  sortItems.forEach((item) => {
    item.classList.remove('active');
  });
  // Add 'active' class to the selected sort item
  let selectedSortItem = document.querySelector(
    `.sort-item[data-sort="${sortType}"]`,
  );
  selectedSortItem.classList.add('active');

  switch (sortType) {
    case 'title-asc':
      adrEntries.sort((a, b) => {
        return a
          .querySelector('h2')
          .textContent.localeCompare(b.querySelector('h2').textContent);
      });
      break;
    case 'title-desc':
      adrEntries.sort((a, b) => {
        return b
          .querySelector('h2')
          .textContent.localeCompare(a.querySelector('h2').textContent);
      });
      break;
    case 'date-desc':
      adrEntries.sort((a, b) => {
        let dateA = new Date(a.querySelector('.adr-date span').textContent);
        let dateB = new Date(b.querySelector('.adr-date span').textContent);
        return dateB - dateA;
      });
      break;
    case 'date-asc':
      adrEntries.sort((a, b) => {
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
  adrEntries.forEach((card) => {
    adrLinks.appendChild(card);
  });
}
