const { PostService } = require('../services');

module.exports = async (req, res) => {
  const { title, content } = req.body;
  const { id } = req.params;
  const userId = req.user.id;
  const { dataValues } = await PostService.getPostById(id);

  if (!title || !content) {
    return res.status(400)
      .json({ message: 'Some required fields are missing' }); 
  }

  if (userId !== dataValues.id) return res.status(401).json({ message: 'Unauthorized user' });

  try {
    await PostService.updatePost({ id, title, content });
    const getPost = await PostService.getPostById(id);

    return res.status(200).json(getPost);
  } catch (err) {
    return res
      .status(500)
      .json({ message: 'Erro ao salvar o usuário no banco', error: err.message });
  }
};