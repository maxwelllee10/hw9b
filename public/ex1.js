const form = document.getElementById('myForm');
const table = document.getElementById('resultTable');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const formData = new FormData(form);

  while (table.rows.length > 0) {
    table.deleteRow(0);
  }

  const headerRow = table.insertRow();
  const keyCell = headerRow.insertCell();
  const valueCell = headerRow.insertCell();
  keyCell.innerHTML = '<strong>Key</strong>';
  valueCell.innerHTML = '<strong>Value</strong>';

  for (const [key, value] of formData.entries()) {
    const row = table.insertRow();
    const keyCell = row.insertCell();
    const valueCell = row.insertCell();
    keyCell.textContent = key;
    valueCell.textContent = value;
  }
});
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/form.html');
});

app.post('/', (req, res) => {
  const name = req.body.name;
  const email = req.body.email;

  res.send(`Thank you for submitting the form, ${name}! Your email address is ${email}.`);
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});