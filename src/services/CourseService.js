const { Like, In } = require('typeorm');

const { courseRepository } = require('../data/repositories/CourseRepository');
const NotFoundException = require('../errors/notFoundException');

async function getAll() {
  return courseRepository.find();
}

async function getById(id) {
  return courseRepository.find({
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

async function deleteById(id) {
  const course = await getById(id);

  if (!course) {
    throw new NotFoundException();
  }

  courseRepository.save({
    id,
    isDeleted: true,
    deletedAt: new Date(),
  });
}

module.exports = {
  getAll,
  getPaginated,
  getByIds,
  deleteById,
};
