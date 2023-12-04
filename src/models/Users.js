// module.exports = (sequelize, DataTypes) => {
//   const User = sequelize.define(
//   'Users',
//   { 
//     id: { 
//       type: DataTypes.INTEGER,
//       allowNull: false,
//       autoIncrement: true,
//       primaryKey: true
//     },
//     display_name: DataTypes.STRING,
//     email: { 
//     type: DataTypes.STRING,
//     unique: true
//     },
//     password: DataTypes.STRING,
//     image: DataTypes.STRING,
//   },
//   {
//     timestamps: false,
//     underscored: true,
//     tableName: 'users',
//   });

//   User.associate = (models) => {
//     User.hasMany(models.BlogPost,
//       { foreignKey: 'user_id', as: 'blog_posts' });
//   };

//   return User;
// };
