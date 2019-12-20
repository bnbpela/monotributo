const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.route('/').get(userController.getAll);

router.get('/getPerson/:cuit', userController.getPerson);

module.exports = router;
