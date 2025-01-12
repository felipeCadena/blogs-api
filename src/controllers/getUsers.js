const { UserService } = require('../services');

module.exports = async (_req, res) => {
  try {
    const allUsers = await UserService.getUsers();

    res.status(200).json(allUsers);
  } catch (err) {
    return res.status(500).json({ message: 'Erro interno', error: err.message });
  }
};