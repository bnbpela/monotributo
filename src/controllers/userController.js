const catchAsync = require('./../utils/catchAsync');
const AppError = require('./../utils/appError');
const axios = require('axios');
const getCuit = require('./../utils/cuitGenerator');

exports.getAll = catchAsync(async (req, res, next) => {
  res.status(404).json({
    status: 'fail',
    statusCode: 404,
    message: 'Route is not defined'
  });
});

exports.getPerson = catchAsync(async (req, res, next) => {
  const { cuit } = req.params;
  const cuits = getCuit(cuit);

  if (!cuits.length) {
    return next(new AppError('Resource not found'));
  }

  for (let i = 0; i < cuits.length; i++) {
    const request = await axios.get(
      `https://cetaweb.afip.gob.ar/api/v1/contribuyente?cuit=${cuits[i]}`
    );
    const responseData = request.data;
    console.log(responseData);
    //Check responseData if exit razon_social
    if (responseData.p_razon_social != null) {
      return res.status(200).json({
        status: 'success',
        statusCode: 200,
        data: {
          name: responseData.p_razon_social,
          cuit: responseData.cuit,
          dni: cuit
        }
      });
    }
    //check if we are in the last item
    if (i === 6) {
      return next(new AppError('Resource not found', 400));
    }
  }
});
