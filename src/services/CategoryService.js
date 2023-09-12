const { categoryRepository } = require('../data/repositories/CategoryRepository');

async function getAll() {
  return categoryRepository.find();
}

module.exports = {
  getAll,
};
