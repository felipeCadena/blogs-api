module.exports = (sequelize, DataTypes) => {
  const PostCategory = sequelize.define(
  'PostCategories',
  { 
    post_id: {
      type: DataTypes.INTEGER,
      field: 'post_id',
      references: {
        model: 'blog_posts',
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    },
    category_id: {
      type: DataTypes.INTEGER,
      field: 'category_id',
      references: {
        model: 'categories',
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    }
  },
  {
    timestamps: false,
    underscored: true,
    tableName: 'posts_categories',
  });

  PostCategory.associate = (models) => {
    models.BlogPosts.belongsToMany(models.Categories, {
      as: 'categories',
      through: PostCategory,
      foreignKey: 'post_id', 
      otherKey: 'category_id', 
    });
    models.Categories.belongsToMany(models.BlogPosts, {
      as: 'blog_posts',
      through: PostCategory,
      foreignKey: 'category_id',
      otherKey: 'post_id',
    });
  }

  return PostCategory;
};
