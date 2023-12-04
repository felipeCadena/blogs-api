const { User } = require('../models');

const createUser = ({ email, password }) => User.create({ email, password });

const getByUserEmail = (email) => User.findOne({ where: { email } });

module.exports = {
  createUser,
  getByUserEmail,
};