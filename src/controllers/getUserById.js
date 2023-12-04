const { LoginService } = require('../services');

module.exports = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await LoginService.getByUserId(id);

    if (!user) {
      return res.status(404).json({ message: 'User does not exist' });
    } 
      
    res.status(200).json(user);
  } catch (err) {
    return res.status(500).json({ message: 'Erro interno', error: err.message });
  }
};