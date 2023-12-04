// module.exports = (sequelize, DataTypes) => {
//   const BlogPost = sequelize.define(
//   'blog_posts',
//   { 
//     id: { 
//       type: DataTypes.INTEGER,
//       allowNull: false,
//       autoIncrement: true,
//       primaryKey: true
//     },
//     title: DataTypes.STRING,
//     content: DataTypes.STRING,
//     user_id: {
//       type: DataTypes.INTEGER,
//       field: 'user_id',
//       references: {
//         model: 'Users',
//         key: 'id',
//       },
//       onUpdate: 'CASCADE',
//       onDelete: 'CASCADE',
//       primaryKey: true,
//     },
//     published: DataTypes.DATE,
//     update: DataTypes.DATE,
//   },
//   {
//     timestamps: false,
//     underscored: true,
//     tableName: 'blog_posts',
//   });

//   BlogPost.associate = (models) => {
//         BlogPost.belongsTo(models.User,
//           { foreignKey: 'user_id', as: 'users' });
//       };

//   return BlogPost;
// };
