import updateCartPrice from './state/cart.js';
import updateLocalStorage from './utils/updateLocalStorage.js';

const addToCartButtons = document.getElementsByClassName('add-to-cart');

Array.from(addToCartButtons).forEach((button) => {
  button.addEventListener('click', () => {
    updateLocalStorage(button);
    updateCartPrice();
  });
});
