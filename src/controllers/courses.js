const path = require('path');
const fs = require('fs');
let courses = require('../data/courses.json');


function listAll(req, res) {
  res.render('courses/courses', {
    courses
  });

}

function getById(req, res) {
  const courseId = req.params.id;
  const course = courses.find(c => c.id == courseId);

  res.render('courses/course', {course});
}

function editarView(req, res) {
  const courseId = req.params.id;
  const course = courses.find(c => c.id == courseId);

  console.log(course)
  res.render('courses/edit', {course});
}

function editar (req, res) {
  const courseId = +req.params.id;
  const file = req.file;

  const { name, price, id, duration, stars, image, description } = req.body

  courses.forEach( c => {
    if (c.id === courseId) {
      const coursePath = path.join(__dirname, '../../public/images/courses/' + c.image);


      c.name = name;
      c.price = price;
      c.duration = duration;
      c.stars = 0;
      c.description = description;

      if (file) {
        c.image = file.filename;
        if(fs.existsSync(coursePath)) {
          fs.unlinkSync(coursePath);
        }
      } else {
        console.log("CAc")
      }
    }
  });

  fs.writeFileSync(path.join(__dirname, '../data/courses.json'), JSON.stringify(courses, null, 2));

  res.redirect('/cursos');
}

function createView(req, res) {
  res.render('courses/create');
}

function create(req, res) {
  const course = req.body;
  const file = req.file;
  console.log(file)
  const numberId = courses[courses.length - 1].id;

  course.price = +course.price;

  course.duration = +course.duration;
  course.stars = 0;
  course.id = numberId + 1;
  course.image = file.filename;
  console.log(req.body);


  courses.push(course);

  fs.writeFileSync(path.join(__dirname, '../data/courses.json'), JSON.stringify(courses, null, 2));

  res.redirect('/cursos');
}

function deleteCourse(req, res) {
  const courseId = +req.params.id;
  courses = courses.filter(c => c.id !== courseId);

  fs.writeFileSync(path.join(__dirname, '../data/courses.json'), JSON.stringify(courses, null, 2));

  res.redirect('/cursos');

}

function deleteCourseLib(req, res) {
  const courseId = +req.params.id;
  const coursePhoto = courses.find(c => c.id === courseId);
  const coursePath = path.join(__dirname, '../../public/images/courses/' + coursePhoto.image);

  if(fs.existsSync(coursePath)) {
    fs.unlinkSync(coursePath);
  }

  courses = courses.filter(c => c.id !== courseId);

  fs.writeFileSync(path.join(__dirname, '../data/courses.json'), JSON.stringify(courses, null, 2));

  res.redirect('/cursos');

}

module.exports = {
  listAll,
  createView,
  getById,
  create,
  deleteCourse,
  deleteCourseLib,
  editarView,
  editar,
};
