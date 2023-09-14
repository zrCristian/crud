const { Like, In } = require('typeorm');

const { courseRepository } = require('../data/repositories/CourseRepository');
const NotFoundException = require('../errors/notFoundException');
const { aws } = require('../config/env');
const s3Service = require('./aws/s3Service');
const logger = require('../utils/logs/logger');

async function getAll() {
  return courseRepository.find();
}

async function getById(id) {
  logger.debug(`seaching course with id: ${id}`);

  const course = await courseRepository.findOne({
    where: {
      id,
    },
  });

  if (!course) {
    logger.error(`course with id ${id} does not exists`);
    throw new NotFoundException();
  }

  return course;
}

async function getByIds(ids) {
  return courseRepository.find({
    where: {
      id: In([...ids]),
    },
  });
}

async function getPaginated(query) {
  const take = query.take || 10;
  const skip = query.skip || 0;
  const keyword = query.keyword || '';
  const { order } = query;

  const [data, count] = await courseRepository.findAndCount({
    where: { name: Like(`%${keyword}%`) },
    order: { name: order },
    take,
    skip,
  });

  return { data, count };
}

function buildCourseFromRequest(reqBody) {
  const {
    name,
    description,
    price,
    duration,
  } = reqBody;

  return {
    name,
    description,
    price: +price,
    duration: +duration,
  };
}

function buildImageURL(filename) {
  return `${aws.cdnUrl}/courses/${filename}`;
}

async function save(reqBody, courseImage) {
  const course = buildCourseFromRequest(reqBody);

  if (courseImage) {
    course.image = buildImageURL(courseImage.filename);
  }

  logger.debug(`creating course ${course.name}`);

  try {
    s3Service.saveObject(courseImage.filename, courseImage.buffer);
    logger.debug('inserting course into db');

    const savedCourse = await courseRepository.save(course);

    logger.debug(`course created with id ${savedCourse.id}`);
  } catch (error) {
    logger.error(error);
  }
}

async function update(id, course, courseImage) {
  logger.debug(`updating course with id: ${id}`);

  const outdatedCourse = await getById(id);

  if (courseImage) {
    s3Service.deleteObject(outdatedCourse.image);
  }

  courseRepository.save({
    id,
    name: course.name,
    description: course.description,
    price: +course.price,
    duration: +course.duration,
    image: courseImage ? buildImageURL(courseImage) : outdatedCourse.image,
  });
}

async function deleteById(id) {
  logger.debug(`deleting course with id: ${id}`);

  const course = await getById(id);

  if (course.image) {
    s3Service.deleteObject(course.image);
  }

  courseRepository.save({
    id: course.id,
    isDeleted: true,
    deletedAt: new Date(),
  });

  logger.debug(`course with id ${id} was deleted`);
}

module.exports = {
  getAll,
  getPaginated,
  save,
  getByIds,
  deleteById,
  getById,
  update,
};
