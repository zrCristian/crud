const { EntitySchema } = require('typeorm');
const { entities } = require('../../config/constants');

module.exports = new EntitySchema({
  name: entities.role,
  tableName: 'roles',
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
});
