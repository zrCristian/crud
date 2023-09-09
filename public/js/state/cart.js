import { getLSValueByKeyName } from '../service/localStorage.js';
import { LOCAL_STORAGE_COURSES_KEY } from '../utils/constants.js';

const updateCartUI = () => {
  const cartPrice = document.getElementById('cartPrice');
  const cartAmount = document.getElementById('cartAmount');

  if (cartPrice || cartAmount) {
    const courses = getLSValueByKeyName(LOCAL_STORAGE_COURSES_KEY);

    const price = courses?.reduce((current, course) => current + course.price, 0) || 0;
    const cartSize = courses?.length || 0;

    cartPrice.innerHTML = `$${price.toFixed(2)}`;
    cartAmount.innerHTML = cartSize;
  }
};

export default updateCartUI;
