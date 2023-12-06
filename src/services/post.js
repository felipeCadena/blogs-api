const { BlogPost, User, Category } = require('../models');

const createPost = ({ title, content, categoryIds, userId, updated, published }) => {
  const post = BlogPost
    .create({ title, content, categoryIds, userId, updated, published });
  return post;
}; 
  
const getPosts = () => BlogPost.findAll({
  include: [
    {
      model: User, as: 'user', attributes: { exclude: ['password'] },
    },
    {
      model: Category, as: 'categories', through: { attributes: [] },
    },
  ],
});

const getPostById = (id) => BlogPost.findOne({
  where: { id },
  include: [
    {
      model: User, as: 'user', attributes: { exclude: ['password'] },
    },
    {
      model: Category, as: 'categories', through: { attributes: [] },
    },
  ],
});

const getPostByCategoryId = (id) => BlogPost.findOne(id);

const updatePost = async ({ id, title, content }) => {
  const [updated] = await BlogPost.update(
    { title, content },
    { 
      where: { id },
      include: [
        {
          model: User, as: 'user', attributes: { exclude: ['password'] },
        },
        {
          model: Category, as: 'categories', through: { attributes: [] },
        },
      ] },
  );
  return updated;
};

module.exports = {
  createPost,
  getPosts,
  getPostByCategoryId,
  getPostById,
  updatePost,
};
