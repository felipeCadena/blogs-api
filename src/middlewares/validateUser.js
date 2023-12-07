const { validateCredentials } = require('../controllers/utils/validateCredentials');
const { UserService } = require('../services');

module.exports = async (req, res, next) => {
  const { email } = req.body;

  const { error } = validateCredentials(req.body);
  console.log(error);

  if (error) {
    return res.status(400).json({ message: error.message });
  }

  const userExist = await UserService.getByUserEmail(email);
  
  if (userExist) {
    return res.status(409).json({ message: 'User already registered' });
  }

  next();
};