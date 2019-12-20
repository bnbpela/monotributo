const express = require('express');
const app = express();
const AppError = require('./utils/appError');
const ErrorHandler = require('./utils/errorhandler');
const RoutesApi = require('./routes');

//Use Routes
app.use('/api/v1/', RoutesApi);

app.all('*', (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

app.use(ErrorHandler);

module.exports = app;
