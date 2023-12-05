const { CategoryService } = require('../services');

module.exports = async (req, res, next) => {
  const { title, content, categoryIds } = req.body;

  if (!title || !content || !categoryIds) {
    return res.status(400).json({ message: 'Some required fields are missing' });
  } 

  const categories = await Promise.all(categoryIds
    .map((id) => CategoryService.getCategoryById(id)));
  
  if (categories.includes(null)) {
    return res.status(400).json({ message: 'one or more "categoryIds" not found',
    });
  }

  next();
};