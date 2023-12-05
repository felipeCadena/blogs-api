const express = require('express');
const { LoginController, 
  CreateUserController, 
  GetUsersController, 
  GetUserByIdController,
  CreateCategoryController } = require('./controllers');
const validateUser = require('./middlewares/validateUser');
const validateToken = require('./middlewares/validateToken');

const app = express();

// não remova ou mova esse endpoint
app.get('/', (_request, response) => {
  response.send();
});

app.use(express.json());

app.get('/user', validateToken, GetUsersController);
app.get('/user/:id', validateToken, GetUserByIdController);
app.post('/login', LoginController);
app.post('/user', validateUser, CreateUserController);
app.post('/categories', validateToken, CreateCategoryController);

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
