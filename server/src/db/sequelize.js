const Sequelize = require('sequelize');
const { CONFIG } = require('../config');

const db = new Sequelize(CONFIG.DATABASE_URL);

db.authenticate()
  .then(() => console.log('Connected to DB'))
  .catch((error) => {
    console.log('Error in connecting to DB', error);
  });

module.exports = db;
