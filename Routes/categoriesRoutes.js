const express = require('express');

const routes = express.Router();

const postCategories = require('../controllers/categoriesController');
const verifyToken = require('../middlewares/validateToken');

routes.post('/', verifyToken, postCategories);

module.exports = routes;
