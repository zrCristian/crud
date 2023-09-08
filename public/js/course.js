import updateCartPrice from './state/cart.js';
import updateLocalStorage from './util/updateLocalStorage.js';

const addToCartButton = document.getElementById('addToCart');

addToCartButton.addEventListener('click', () => {
  updateLocalStorage(addToCartButton);
  updateCartPrice();
});
