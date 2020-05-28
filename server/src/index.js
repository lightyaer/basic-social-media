require('dotenv').config();
require('./db/sequelize');

const { CONFIG } = require('./config');
const express = require('express');

const app = express();

app.use(express.json());

const PORT = CONFIG.PORT || 3500;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});

module.exports = {
  app,
};
