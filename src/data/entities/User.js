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
      nullable: false,
    },
    lastname: {
      type: 'varchar',
      nullable: false,
    },
    email: {
      type: 'varchar',
      nullable: false,
      unique: true,
    },
    password: {
      type: 'varchar',
      nullable: false,
    },
    profile_image: {
      type: 'varchar',
      nullable: true,
    },
    send_notification: {
      type: 'boolean',
      default: false,
    },
    is_deleted: {
      type: 'boolean',
      default: false,
    },
    deleted_at: {
      type: 'timestamp',
      nullable: true,
    },
    created_at: {
      type: 'timestamp',
      default: () => 'CURRENT_TIMESTAMP',
    },
    role_id: {
      type: 'int',
      nullable: true,
    },
  },
  relations: {
    role: {
      target: 'Role',
      type: 'many-to-one',
      joinColumn: { name: 'role_id', referencedColumnName: 'id' },
      cascade: false,
      nullable: true,
      eager: true,
    },
    favoriteCourses: {
      target: 'Course',
      type: 'many-to-many',
      joinTable: {
        name: 'user_favorites_courses',
        joinColumn: { name: 'user_id', referencedColumnName: 'id' },
        inverseJoinColumn: { name: 'course_id', referencedColumnName: 'id' },
      },
      cascade: true,
    },
    orderItems: {
      target: 'OrderItem',
      type: 'one-to-many',
      inverseSide: 'course',
      eager: false,
    },
  },
});
