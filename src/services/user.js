const { User } = require('../models');

const createUser = ({ displayName, email, password, image }) => User
  .create({ displayName, email, password, image });

const getUsers = () => User.findAll({
  attributes: { exclude: ['password'] },
});

const getByUserEmail = (email) => User.findOne({
  where: { email },
});

const getByUserId = async (id) => {
  const user = await User.findOne({
    where: { id },
    attributes: { exclude: ['password'] },
  });
  return user;
}; 

const deleteUser = async (id) => {
  await User.destroy({
    where: { id },
  });
};

module.exports = {
  createUser,
  getByUserEmail,
  getByUserId,
  getUsers,
  deleteUser,
};