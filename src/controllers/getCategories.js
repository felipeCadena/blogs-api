const { CategoryService } = require('../services');

module.exports = async (_req, res) => {
  try {
    const categories = await CategoryService.getCategories();

    res.status(200).json(categories);
  } catch (err) {
    return res.status(500).json({ message: 'Erro interno', error: err.message });
  }
};