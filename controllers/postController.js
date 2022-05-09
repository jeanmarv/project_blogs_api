const { Users } = require('../models');
const { createToken } = require('../middlewares/jwtToken');

const postController = async (req, res) => {
  const { displayName, email, password, image } = req.body;
  try {
    const getEmail = await Users.findOne({ where: { email } });
    if (getEmail) {
      return res.status(409).json({ message: 'User already registered' });
    } 
        const user = await Users.create({ displayName, email, password, image });
        return res.status(201).json({ token: createToken(user.id) });
  } catch (err) {
    res.status(409).json({ message: err.message });
  }
};

module.exports = postController;
