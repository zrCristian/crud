import { getLSValueByKeyName, setLSValue } from '../service/localStorage.js';
import { LOCAL_STORAGE_COURSES_KEY } from './constants.js';

const updateLocalStorage = (button) => {
  try {
    const coursePrice = +button.getAttribute('data-course-price');
    const courseId = +button.getAttribute('data-course-id');

    const cartCourses = getLSValueByKeyName(LOCAL_STORAGE_COURSES_KEY) || [];

    const courseData = {
      price: coursePrice,
      id: courseId,
    };

    cartCourses.push(courseData);
    setLSValue(LOCAL_STORAGE_COURSES_KEY, cartCourses);
  } catch (error) {
    localStorage.clear();
  }
};

export default updateLocalStorage;
