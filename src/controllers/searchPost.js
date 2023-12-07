const { PostService } = require('../services');

module.exports = async (req, res) => {
  const { q } = req.query;
  
  try {
    const posts = await PostService.searchPost(q);

    // if (!posts) res.status(200).json(posts);

    res.status(200).json(posts);
  } catch (err) {
    return res.status(500).json({ message: 'Erro interno', error: err.message });
  }
};