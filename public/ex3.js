const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

const articles = [];

app.post('/articles', (req, res) => {

  const { title, body } = req.body;

  const newId = articles.length > 0 ? Math.max(...articles.map(a => a.id)) + 1 : 1;

  const newArticle = { id: newId, title, body };
  articles.push(newArticle);

  res.send(`New article added: "${title}" (ID: ${newId})`);
});

app.listen(3000, () => console.log('Server started on port 3000'));