const { PostService } = require('../services');

module.exports = async (req, res) => {
  const { id } = req.params;
  try {
    const post = await PostService.getPostById(id);

    if (!post) {
      return res.status(404).json({ message: 'Post does not exist' });
    } 
      
    res.status(200).json(post);
  } catch (err) {
    return res.status(500).json({ message: 'Erro interno', error: err.message });
  }
};