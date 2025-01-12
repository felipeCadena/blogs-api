'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('posts_categories', {
        post_id: {
          type: Sequelize.INTEGER,
          references: {
            model: 'blog_posts',
            key: 'id',
          },
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE',
          primaryKey: true,
        },
        category_id: {
          type: Sequelize.INTEGER,
          references: {
            model: 'categories',
            key: 'id',
          },
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE',
          primaryKey: true,
        },
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('posts_categories');
  }
};
