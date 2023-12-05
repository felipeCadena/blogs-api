const { Category } = require('../models');

const createCategory = ({ name }) => Category
  .create({ name });

const getCategories = () => Category.findAll();

const getCategoryById = (id) => Category.findOne({
  where: { id },
});

module.exports = {
  createCategory,
  getCategories,
  getCategoryById,
};
