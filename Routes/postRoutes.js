const express = require('express');

const routes = express.Router();

const { validateName, validateEmail, validatePassword } = require('../middlewares/validateUser');

const postController = require('../controllers/postController');

routes.post('/', validateName, validateEmail, validatePassword, postController);

module.exports = routes;
