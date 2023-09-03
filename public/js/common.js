const closeAnnouncmentButton = document.getElementById('announcementButton');
const announcement = document.getElementById('announcement');

closeAnnouncmentButton.addEventListener('click', () => {
  announcement.remove();
});
