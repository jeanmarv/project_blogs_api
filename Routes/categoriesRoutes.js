const express = require('express');

const routes = express.Router();

const { postCategories, getCategories } = require('../controllers/categoriesController');
const verifyToken = require('../middlewares/validateToken');

routes.post('/', verifyToken, postCategories);
routes.get('/', verifyToken, getCategories);

module.exports = routes;
