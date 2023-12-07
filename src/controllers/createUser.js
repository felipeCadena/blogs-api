const { UserService } = require('../services');
const { generateToken } = require('./utils/token');

module.exports = async (req, res) => {
  const { displayName, email, password, image } = req.body;

  try {
    const user = await UserService.createUser({ displayName, email, password, image });

    if (!user) throw Error;

    const token = generateToken(user);

    res.status(201).json({ token });
  } catch (err) {
    res
      .status(500)
      .json({ message: 'Erro ao salvar o usuário no banco', error: err.message });
  }
};