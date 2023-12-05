const jwt = require('jsonwebtoken');

const { LoginService } = require('../services');

const secret = process.env.JWT_SECRET;

function extractToken(bearerToken) {
  return bearerToken.split(' ')[1];
}

module.exports = async (req, res, next) => {
  const { authorization } = req.headers;
  
  if (!authorization) {
    return res.status(401).json({ message: 'Token not found' });
  }

  const token = extractToken(authorization);

  try {
    const decoded = jwt.verify(token, secret);
    const user = await LoginService.getByUserId(decoded.data.userId);
    
    if (!user) {
      return res.status(401).json({ message: 'User not found' });
    }

    req.user = user.dataValues;

    next();
  } catch (err) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
};