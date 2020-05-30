require('dotenv').config();
const db = require('./db/sequelize');

const express = require('express');
const cors = require('cors');
const { router: userRoutes } = require('./user/user.routes');

const app = express();

app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 3000;

app.use('/api/user', userRoutes);

db.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
  });
});

module.exports = {
  app,
};
