const modal = document.getElementById('modal');
const deleteButton = document.getElementById('deleteButton');

const cancelButton = document.getElementById('cancelModalButton');
const overlay = document.getElementById('overlay');
const closeButton = document.getElementById('closeModalButton');

overlay.addEventListener('click', (e) => {
  const { id } = e.target;

  if (id === 'overlay') {
    modal.classList.add('hidden');
  }
});

deleteButton.addEventListener('click', () => {
  modal.classList.remove('hidden');
});

[cancelButton, closeButton].forEach((element) => {
  element.addEventListener('click', () => {
    modal.classList.add('hidden');
  });
});
