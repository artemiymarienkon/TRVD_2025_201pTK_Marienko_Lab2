const express = require('express');
const mustacheExpress = require('mustache-express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.engine('mustache', mustacheExpress());
app.set('view engine', 'mustache');
app.set('views', __dirname + '/views');

app.use(bodyParser.urlencoded({ extended: true }));

const userController = require('./controllers/userController');

app.get('/', (req, res) => {
    res.render('index', { title: 'Open Encyclopedia' });
});

// Users
app.get('/users', userController.getUsers);
app.post('/users', userController.createUser);

app.listen(port, () => {
    console.log(`Сервер запущено: http://localhost:${port}`);
});
