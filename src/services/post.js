const { BlogPost } = require('../models');

const createPost = ({ title, content, categoryIds, userId, updated, published }) => {
  const post = BlogPost
    .create({ title, content, categoryIds, userId, updated, published });
  return post;
}; 
  
const getPosts = () => BlogPost.findAll();

const getPostByCategoryId = (id) => BlogPost.findOne(id);

module.exports = {
  createPost,
  getPosts,
  getPostByCategoryId,
};
