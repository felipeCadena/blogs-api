module.exports = (sequelize, DataTypes) => {
  const BlogPost = sequelize.define(
  'BlogPost',
  { 
    id: { 
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    userId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Users',
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
      primaryKey: true,
    },
    published: DataTypes.DATE,
    updated: DataTypes.DATE,
  },
  {
    timestamps: false,
    underscored: true,
    tableName: 'blog_posts',
  });

  BlogPost.associate = (models) => {
        BlogPost.belongsTo(models.User,
          { foreignKey: 'userId', as: 'user' });
      };

  return BlogPost;
};
