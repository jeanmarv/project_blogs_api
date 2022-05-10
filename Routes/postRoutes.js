const express = require('express');

const routes = express.Router();

const verifyToken = require('../middlewares/validateToken');
const { getPost, getById } = require('../controllers/postController');

routes.get('/', verifyToken, getPost);
routes.get('/:id', verifyToken, getById);

module.exports = routes;
