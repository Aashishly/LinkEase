const express = require('express');
const bodyParser = require('body-parser');
const db = require('./db');
const authRoutes = require('./routes/authRoute');
const linkRoutes = require('./routes/link.Route');
const db = require('./db');

const app = express();
const PORT = process.env.PORT || 8000;

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

db.connect();

app.get('/', (req, res) => {
  res.status(200).send('<h1>Short Link Generator made by Aashishly!</h1>');
});

app.use('/api/auth', authRoutes);
app.use('/api/shortlink', linkRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});