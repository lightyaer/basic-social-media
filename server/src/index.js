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

app.use((error, req, res, next) => {
  // log error to error/log file with req context
  res.status(200).send({ message: 'Something went wrong' });
  next();
});

db.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
  });
});

module.exports = {
  app,
};
