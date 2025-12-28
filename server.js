const express = require('express');
const mustacheExpress = require('mustache-express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Шаблонізатор
app.engine('mustache', mustacheExpress());
app.set('view engine', 'mustache');
app.set('views', __dirname + '/views');

// Парсер форм
app.use(bodyParser.urlencoded({ extended: true }));

// Контролери
const userController = require('./controllers/userController');
const articleController = require('./controllers/articleController');

// Маршрути
app.get('/', (req, res) => res.render('index', { title: 'Головна' }));
app.get('/about', (req, res) => res.render('about', { title: 'About' }));

// Users
app.get('/users', userController.getUsers);
app.post('/users', userController.createUser);

// Articles
app.get('/articles', articleController.getArticles);
app.post('/articles', articleController.createArticle);

// Сервер
app.listen(port, () => {
    console.log(`Сервер запущено: http://localhost:${port}`);
});
