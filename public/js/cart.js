import findCoursesByIds from './service/courses.js';
import { getLSValueByKeyName, setLSValue } from './service/localStorage.js';
import updateCartUI from './state/cart.js';
import { LOCAL_STORAGE_COURSES_KEY } from './utils/constants.js';

const coursesList = document.getElementById('courses');
const buttons = [];

const populateCourseItem = (course) => {
  const li = document.createElement('li');
  li.className = 'flex items-center gap-4';
  li.id = course.id;

  const img = document.createElement('img');
  img.src = `/images/courses/${course.image}`;
  img.alt = course.name;
  img.className = 'h-16 w-16 rounded object-cover';

  const div1 = document.createElement('div');

  const h3 = document.createElement('h3');
  h3.className = 'text-lg text-gray-900 dark:text-gray-200';
  h3.textContent = course.name;

  const dl = document.createElement('dl');
  dl.className = 'mt-0.5 space-y-px text-sm text-gray-600 dark:text-gray-400';

  const div2 = document.createElement('div');

  const dt = document.createElement('dt');
  dt.className = 'inline';
  dt.textContent = 'Duración:';

  const dd = document.createElement('dd');
  dd.className = 'inline';
  dd.textContent = ` ${course.duration || 0} horas`;

  div2.appendChild(dt);
  div2.appendChild(dd);

  dl.appendChild(div2);

  div1.appendChild(h3);
  div1.appendChild(dl);
  li.appendChild(img);
  li.appendChild(div1);

  const div3 = document.createElement('div');
  div3.className = 'flex flex-1 items-center justify-end gap-2';

  const button = document.createElement('button');
  button.id = `course-${course.id}`;
  button.className = 'text-gray-600 transition hover:text-red-600 dark:text-gray-100';
  buttons.push(button);

  const span = document.createElement('span');
  span.className = 'sr-only';
  span.textContent = 'Eliminar item';

  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svg.setAttribute('fill', 'none');
  svg.setAttribute('viewBox', '0 0 24 24');
  svg.setAttribute('stroke-width', '1.5');
  svg.setAttribute('stroke', 'currentColor');
  svg.setAttribute('class', 'h-4 w-4');

  const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
  path.setAttribute('stroke-linecap', 'round');
  path.setAttribute('stroke-linejoin', 'round');
  path.setAttribute('d', 'M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0');

  svg.appendChild(path);
  button.appendChild(span);
  button.appendChild(svg);
  div3.appendChild(button);

  li.appendChild(div3);

  coursesList.appendChild(li);
};

const updateCoursesInCartUI = async () => {
  const coursesLS = getLSValueByKeyName(LOCAL_STORAGE_COURSES_KEY) || [];
  if (coursesLS?.length < 1) {
    return;
  }

  const ids = coursesLS.map((c) => c.id);

  const courses = await findCoursesByIds(ids);

  courses.forEach((course) => {
    populateCourseItem(course);
  });
};

const handleButtonClick = async (button) => {
  const coursesInLS = getLSValueByKeyName(LOCAL_STORAGE_COURSES_KEY) || [];

  const courseId = +button.id.split('-')[1];
  const coursesInCart = coursesInLS.filter((course) => course.id !== courseId);

  setLSValue(LOCAL_STORAGE_COURSES_KEY, coursesInCart);

  const li = document.getElementById(`${courseId}`);
  li.remove();
};

const addEventToButtons = async () => {
  buttons.forEach((button) => {
    button.addEventListener('click', async () => {
      handleButtonClick(button);
      updateCartUI();
    });
  });
};

async function updateUI() {
  await updateCartUI();
  await updateCoursesInCartUI();
  await addEventToButtons();
}

await updateUI();
