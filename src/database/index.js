const mongoose = require('mongoose');

if (!process.env.DATABASE_URL) throw new Error('DATABASE_URL not define');

mongoose
  .connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
  })
  .then(() => console.log('Databse successful connected!'));

module.exports = mongoose;
