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
    profileImage: {
      type: 'varchar',
      nullable: true,
      name: 'profile_image',
    },
    sendNotification: {
      type: 'boolean',
      default: false,
      name: 'send_notification',
    },
    isDeleted: {
      type: 'boolean',
      default: false,
      name: 'is_deleted',
    },
    deletedAt: {
      type: 'timestamp',
      nullable: true,
      name: 'deleted_at',
    },
    createdAt: {
      type: 'timestamp',
      default: () => 'CURRENT_TIMESTAMP',
      name: 'created_at',
    },
    roleId: {
      type: 'int',
      nullable: true,
      name: 'role_id',
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
