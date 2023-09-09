const updateCartUI = () => {
  const cartPrice = document.getElementById('cartPrice');
  const cartAmount = document.getElementById('cartAmount');

  if (cartPrice || cartAmount) {
    cartPrice.innerHTML = `$${(+localStorage.getItem('cartPrice')).toFixed(2)}`;
    cartAmount.innerHTML = JSON.parse(localStorage.getItem('courses'))?.length || 0;
  }
};

export default updateCartUI;
