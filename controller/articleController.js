const Article = require('../models/article');

exports.getArticles = (req, res) => {
    const articles = Article.getAllArticles();
    res.render('articles', { articles });
};

exports.createArticle = (req, res) => {
    const { title, summary, content } = req.body;
    Article.addArticle({ title, summary, content });
    res.redirect('/articles');
};
