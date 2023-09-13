const { EntitySchema } = require('typeorm');
const { entities } = require('../../config/constants');

module.exports = new EntitySchema({
  name: entities.course,
  tableName: 'courses',
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
    price: {
      type: 'float',
      nullable: true,
    },
    duration: {
      type: 'float',
      nullable: true,
    },
    description: {
      type: 'text',
      nullable: true,
    },
    image: {
      type: 'varchar',
      nullable: true,
    },
    stars: {
      type: 'float',
      nullable: true,
    },
    discount: {
      type: 'float',
      nullable: true,
    },
    is_deleted: {
      type: 'boolean',
      default: false,
      nullable: true,
    },
    deleted_at: {
      type: 'timestamp',
      nullable: true,
    },
    created_at: {
      type: 'timestamp',
      default: () => 'CURRENT_TIMESTAMP',
      nullable: false,
    },
  },
  relations: {
    categories: {
      target: entities.category,
      type: 'many-to-many',
      joinTable: {
        name: 'courses_categories',
        joinColumn: {
          name: 'course_id',
          referencedColumnName: 'id',
        },
        inverseJoinColumn: {
          name: 'category_id',
          referencedColumnName: 'id',
        },
      },
      cascade: true,
    },
    favoritedByUsers: {
      target: entities.user,
      type: 'many-to-many',
      joinTable: {
        name: 'user_favorites_courses',
        joinColumn: { name: 'course_id', referencedColumnName: 'id' },
        inverseJoinColumn: { name: 'user_id', referencedColumnName: 'id' },
      },
      cascade: true,
    },
  },
});
