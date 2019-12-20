const dotenv = require('dotenv').config();
const database = require('./database');
const app = require('./app');
const morgan = require('morgan');

// Development logging
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

const port = process.env.PORT || 3000;

const server = app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
