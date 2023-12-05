const { PostCategoryService } = require('../services');

module.exports = async (req, res) => {
  const { title, content, categoryIds } = req.body;
  const userId = Number(req.user.id);
    
  try {
    const post = await PostCategoryService.insert({ 
      title, 
      content,
      categoryIds,
      userId,
    });
  
    return res.status(201).json(post);
  } catch (err) {
    return res
      .status(500)
      .json({ message: 'Erro ao salvar o usuário no banco', error: err.message });
  }
};