const express = require('express');
const app = express();

// Set up the static files middleware
app.use(express.static('public'));

// Set up the routes
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

app.get('/about', (req, res) => {
  res.sendFile(__dirname + '/public/about.html');
});

app.get('/contact', (req, res) => {
  res.sendFile(__dirname + '/public/contact.html');
});

app.post('/contact', (req, res) => {
  const { name, subject, message, email } = req.body;
  res.send(`Thank you for contacting us, ${name}!`);
});

app.get('/upload', (req, res) => {
  res.sendFile(__dirname + '/public/upload.html');
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
