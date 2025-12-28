const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, '../data/articles.json');

function getAllArticles() {
    if (!fs.existsSync(filePath)) fs.writeFileSync(filePath, '[]');
    const data = fs.readFileSync(filePath);
    return JSON.parse(data);
}

function addArticle(article) {
    const articles = getAllArticles();
    articles.push(article);
    fs.writeFileSync(filePath, JSON.stringify(articles, null, 2));
}

module.exports = { getAllArticles, addArticle };
