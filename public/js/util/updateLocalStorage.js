const updateLocalStorage = (button) => {
  try {
    const cartPrice = +localStorage.getItem('cartPrice');
    const coursePrice = +button.getAttribute('data-course-price');

    const courseId = +button.getAttribute('data-course-id');
    const cartCourses = JSON.parse(localStorage.getItem('courses')) || [];

    cartCourses.push(courseId);

    localStorage.setItem('cartPrice', coursePrice + cartPrice);
    localStorage.setItem('courses', JSON.stringify(cartCourses));
  } catch (error) {
    localStorage.clear();
  }
};

export default updateLocalStorage;
