const closeAnnouncmentButton = document.getElementById('announcementButton');
const announcement = document.getElementById('announcement');

const searchIcon = document.getElementById('searchIcon');
const searchForm = document.getElementById('searchForm');

if (announcement) {
  closeAnnouncmentButton.addEventListener('click', () => {
    announcement.remove();
  });
}

searchIcon.addEventListener('click', () => {
  searchForm.submit();
});
