const { EntitySchema } = require('typeorm');
const { entities } = require('../../config/constants');

module.exports = new EntitySchema({
  name: entities.orderItem,
  tableName: 'order_item',
  columns: {
    id: {
      primary: true,
      type: 'int',
      generated: true,
    },
    price: {
      type: 'float',
      nullable: false,
    },
    discount: {
      type: 'float',
      default: 0,
    },
    course_id: {
      type: 'int',
      nullable: false,
    },
    order_id: {
      type: 'int',
      nullable: false,
    },
  },
  relations: {
    course: {
      target: entities.course,
      type: 'many-to-one',
      joinColumn: { name: 'course_id', referencedColumnName: 'id' },
      cascade: false,
      nullable: false,
      eager: false,
    },
    order: {
      target: entities.order,
      type: 'many-to-one',
      joinColumn: { name: 'order_id', referencedColumnName: 'id' },
      cascade: false,
      nullable: false,
      eager: false,
    },
  },
});
