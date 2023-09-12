const { Like } = require('typeorm');

const { courseRepository } = require('../data/repositories/CourseRepository');

async function getAll() {
  return courseRepository.find();
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

module.exports = {
  getAll,
  getPaginated,
};
