const { EntitySchema } = require('typeorm');

module.exports = new EntitySchema({
  name: 'User',
  tableName: 'users',
  columns: {
    id: {
      primary: true,
      type: 'int',
      generated: true,
    },
    name: {
      type: 'varchar',
    },
    lastname: {
      type: 'varchar',
    },
    email: {
      type: 'varchar',
      unique: true,
      nullable: false,
    },
    profile_image: {
      type: 'varchar',
    },
    send_notification: {
      type: 'boolean',
    },
  },
});
