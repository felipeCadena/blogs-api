const Sequelize = require('sequelize');
const { PostCategory, BlogPost } = require('../models');
const config = require('../config/config');

const env = process.env.NODE_ENV || 'development';
const sequelize = new Sequelize(config[env]);

const insert = async ({ title, content, categoryIds, userId }) => {
  const result = await sequelize.transaction(async (t) => {
    const newPost = await BlogPost
      .create({ title,
        content,
        userId,
        updated: new Date(),
        published: new Date() }, { transaction: t });
      
    const postId = newPost.id;

    await Promise.all(categoryIds.map(async (categoryId) => {
      await PostCategory.create({ 
        postId, categoryId,
      }, { transaction: t });
    }));
  
    return newPost;
  });

  return result;
};

module.exports = {
  insert,

};
