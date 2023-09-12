const { EntitySchema } = require('typeorm');
const { entities } = require('../../config/constants');

module.exports = new EntitySchema({
  name: entities.order,
  tableName: 'orders',
  columns: {
    id: {
      primary: true,
      type: 'int',
      generated: true,
    },
    user_id: {
      type: 'int',
      nullable: false,
    },
    final_price: {
      type: 'float',
      nullable: false,
    },
    order_status: {
      type: 'varchar',
      nullable: true,
    },
    created_at: {
      type: 'timestamp',
      default: () => 'CURRENT_TIMESTAMP',
    },
  },
  relations: {
    user: {
      target: entities.user,
      type: 'many-to-one',
      joinColumn: { name: 'user_id', referencedColumnName: 'id' },
      cascade: false,
      nullable: false,
      eager: false,
    },
  },
});
