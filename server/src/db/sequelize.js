const Sequelize = require('sequelize');
const CONFIG = require('../config/config.json');

const ENV_VARIABLES = CONFIG[process.env.NODE_ENV];

const db = new Sequelize(
  ENV_VARIABLES.database,
  ENV_VARIABLES.username,
  ENV_VARIABLES.password,
  {
    host: ENV_VARIABLES.host,
    dialect: ENV_VARIABLES.dialect,
    logging: false
  }
);

db.authenticate()
  .then(() => console.log('Connected to DB'))
  .catch((error) => {
    console.log('Error in connecting to DB', error);
  });

module.exports = db;
