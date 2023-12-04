const { User } = require('../models');

const createUser = ({ displayName, email, password, image }) => User
  .create({ displayName, email, password, image });

const getUsers = () => User.findAll({
  attributes: { exclude: ['password'] },
});

const getByUserEmail = (email) => User.findOne({ where: { email } });

const getByUserId = (userId) => User.findByPk(userId);

module.exports = {
  createUser,
  getByUserEmail,
  getByUserId,
  getUsers,
};