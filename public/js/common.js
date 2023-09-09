import updateCartPrice from './state/cart.js';

const closeAnnouncmentButton = document.getElementById('announcementButton');
const announcement = document.getElementById('announcement');

const searchIcon = document.getElementById('searchIcon');
const searchForm = document.getElementById('searchForm');
const closeSessionButton = document.getElementById('closeSession');

if (announcement) {
  closeAnnouncmentButton.addEventListener('click', () => {
    announcement.remove();
  });
}

if (searchIcon) {
  searchIcon.addEventListener('click', () => {
    searchForm.submit();
  });
}

if (closeSessionButton) {
  closeSessionButton.addEventListener('click', () => {
    localStorage.clear();
  });
}

updateCartPrice();
