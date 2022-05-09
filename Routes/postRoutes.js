const express = require('express');

const routes = express.Router();

const validateUser = require('../middlewares/validateUser');

const postController = require('../controllers/postController');

routes.post('/', validateUser, postController);

module.exports = routes;
