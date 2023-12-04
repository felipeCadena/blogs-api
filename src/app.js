const express = require('express');
const { LoginController, CreateUserController, GetUsersController } = require('./controllers');
const validateUser = require('./middlewares/validateUser');
const validateToken = require('./middlewares/validateToken');

const app = express();

// não remova ou mova esse endpoint
app.get('/', (_request, response) => {
  response.send();
});

app.use(express.json());

app.post('/login', LoginController);
app.get('/user', validateToken, GetUsersController);
app.post('/user', validateUser, CreateUserController);

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
