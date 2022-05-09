const express = require('express');

const routes = express.Router();

const { validateName, validateEmail, validatePassword } = require('../middlewares/validateUser');
const postController = require('../controllers/postController');

const verifyToken = require('../middlewares/validateToken');
const getUserController = require('../controllers/getUserController');

const getByIdController = require('../controllers/getByIdcontroller');

routes.post('/', validateName, validateEmail, validatePassword, postController);
routes.get('/', verifyToken, getUserController);
routes.get('/:id', verifyToken, getByIdController);

module.exports = routes;
