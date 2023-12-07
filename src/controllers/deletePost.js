const { PostService } = require('../services');

module.exports = async (req, res) => {
  const { id } = req.params;
  const userId = req.user.id;
  const getPost = await PostService.getPostById(id);

  if (!getPost) {
    return res.status(404).json({ message: 'Post does not exist' });
  } 
  
  if (userId !== getPost.userId) {
    return res.status(401).json({ message: 'Unauthorized user' });
  } 
  
  await PostService.deletePost(id);

  return res.sendStatus(204);
};