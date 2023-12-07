const { UserService } = require('../services');

module.exports = async (req, res) => {
  const userId = req.user.id;
  
  await UserService.deleteUser(userId);

  return res.sendStatus(204);
};