const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.post('/api/countries', (req, res) => {
  const name = req.body.name;
  const countries = req.body.countries;
  const numCountries = countries.length;
  
  // Send confirmation message back to client
  res.send(`Thank you, ${name}, for submitting your travel information. You have visited ${numCountries} countries.`);
});

app.listen(port, () => console.log(`Server listening on port ${port}!`));

app.get('/travel-info', (req, res) => {
  res.sendFile(__dirname + '/views/travel-info.html');
});