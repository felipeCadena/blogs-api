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
const DeletePost = require('./deletePost');
const DeleteUser = require('./deleteUser');
const SearchPost = require('./searchPost');

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
  DeletePost,
  DeleteUser,
  SearchPost,
};