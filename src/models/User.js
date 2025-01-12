module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
  'User',
  { 
    id: { 
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    displayName: DataTypes.STRING,
    email: { 
    type: DataTypes.STRING,
    unique: true
    },
    password: DataTypes.STRING,
    image: DataTypes.STRING,
  },
  {
    timestamps: false,
    underscored: true,
    tableName: 'users',
  });

  User.associate = (models) => {
    User.hasMany(models.BlogPost,
      { foreignKey: 'userId', as: 'blog_posts' });
  };

  return User;
};
