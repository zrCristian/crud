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
  return courseRepository.findOne({
    where: {
      id,
    },
  });
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

async function save(course, courseImage) {
  const {
    name,
    description,
    price,
    duration,
  } = course;

  logger.debug(`creating course ${course.name}`);

  const newCourse = {
    name,
    description,
    price: +price,
    duration: +duration,
    image: `${aws.cdnUrl}/courses/${courseImage.filename}`,
    stars: 0,
  };

  try {
    s3Service.saveObject(courseImage.filename, courseImage.buffer);
    logger.debug('inserting course into db');

    const savedCourse = await courseRepository.save(newCourse);

    logger.debug(`course created with id ${savedCourse.id}`);
  } catch (error) {
    logger.error(error);
  }
}

async function deleteById(id) {
  logger.debug(`deleting course with id: ${id}`);
  const course = await getById(id);

  if (!course) {
    logger.error(`course with id ${id} does not exists`);
    throw new NotFoundException();
  }

  courseRepository.save({
    id,
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
};
