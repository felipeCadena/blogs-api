const express = require('express');
const { LoginController, 
  CreateUserController, 
  GetUsersController, 
  GetUserByIdController,
  CreateCategoryController,
  GetCategoriesController,
  CreatePostController,
  GetAllPosts,
  GetPostById, UpdatePost } = require('./controllers');
const validateUser = require('./middlewares/validateUser');
const validateToken = require('./middlewares/validateToken');
const validateCategories = require('./middlewares/validateCategories');

const app = express();

// não remova ou mova esse endpoint
app.get('/', (_request, response) => {
  response.send();
});

app.use(express.json());

app.post('/login', LoginController);
app.get('/user', validateToken, GetUsersController);
app.post('/user', validateUser, CreateUserController);
app.get('/user/:id', validateToken, GetUserByIdController);
app.get('/categories', validateToken, GetCategoriesController);
app.post('/categories', validateToken, CreateCategoryController);
app.post('/post', validateToken, validateCategories, CreatePostController);
app.get('/post', validateToken, GetAllPosts);
app.get('/post/:id', validateToken, GetPostById);
app.put('/post/:id', validateToken, UpdatePost);

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
