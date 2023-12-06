const LoginController = require('./login');
const CreateUserController = require('./createUser');
const GetUsersController = require('./getUsers');
const GetUserByIdController = require('./getUserById');
const CreateCategoryController = require('./createCategory');
const GetCategoriesController = require('./getCategories');
const CreatePostController = require('./createPost');
const GetAllPosts = require('./getPosts');
const GetPostById = require('./getPostById');
const UpdatePost = require('./updatePost');

module.exports = {
  LoginController,
  CreateUserController,
  GetUsersController,
  GetUserByIdController,
  CreateCategoryController,
  GetCategoriesController,
  CreatePostController,
  GetAllPosts,
  GetPostById,
  UpdatePost,
};