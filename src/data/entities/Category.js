const { EntitySchema } = require('typeorm');
const { entities } = require('../../config/constants');

module.exports = new EntitySchema({
  name: entities.category,
  tableName: 'categories',
  columns: {
    id: {
      primary: true,
      type: 'int',
      generated: true,
    },
    name: {
      type: 'varchar',
      nullable: false,
    },
  },
  relations: {
    courses: {
      target: entities.course,
      type: 'many-to-many',
      inverseSide: 'categories',
      joinTable: {
        name: 'courses_categories',
        joinColumn: {
          name: 'category_id',
          referencedColumnName: 'id',
        },
        inverseJoinColumn: {
          name: 'course_id',
          referencedColumnName: 'id',
        },
      },
    },
  },
});
