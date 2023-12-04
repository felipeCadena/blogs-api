const { LoginService } = require('../services');
const { generateToken } = require('./utils/validateCredentials');

const validBody = (email, password) => email && password;

module.exports = async (req, res) => {
  try {
    const { email, password } = req.body;
  
    if (!validBody(email, password)) {
      return res.status(400).json({ message: 'Some required fields are missing' });
    }

    const user = await LoginService.getByUserEmail(email);

    if (!user || user.password !== password) {
      return res.status(400).json({ message: 'Invalid fields' });
    }

    const token = generateToken(user);

    res.status(200).json({ token });
  } catch (err) {
    return res.status(500).json({ message: 'Erro interno', error: err.message });
  }
};