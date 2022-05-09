const jwt = require('jsonwebtoken');

const JWT_SECRET = '123456';

const createToken = (data) => {
    const token = jwt.sign({ userId: data }, JWT_SECRET, { expiresIn: '60d' });
    return token;
};

const validateToken = (token) => {
    const verifyToken = jwt.verify(token, JWT_SECRET);
    return verifyToken;
};

module.exports = {
    createToken,
    validateToken,
};