const { PostService } = require('../services');

module.exports = async (_req, res) => {
  try {
    const posts = await PostService.getPosts();

    res.status(200).json(posts);
  } catch (err) {
    return res.status(500).json({ message: 'Erro interno', error: err.message });
  }
};