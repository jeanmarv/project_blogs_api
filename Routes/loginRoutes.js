const express = require('express');

const routes = express.Router();

const { validateEmail, validatePassword } = require('../middlewares/validateLogin');

const postLoginController = require('../controllers/postLoginController');

routes.post('/', validateEmail, validatePassword, postLoginController);

module.exports = routes;
