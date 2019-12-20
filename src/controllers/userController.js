const catchAsync = require('./../utils/catchAsync');
const AppError = require('./../utils/appError');

exports.getAll = catchAsync(async (req, res, next) => {
  res.status(404).json({
    status: 'fail',
    statusCode: 404,
    message: 'Route is not defined'
  });
});

exports.getPerson = catchAsync(async (req, res, next) => {});
