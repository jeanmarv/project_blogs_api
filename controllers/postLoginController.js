const { Users } = require('../models');
const { createToken } = require('../middlewares/jwtToken');

const postLoginController = async (req, res) => {
  const { email, password } = req.body;
  const getUser = await Users.findOne({ where: { email, password } });

  if (!getUser) {
      return res.status(400).json({ message: 'Invalid fields' });
  }

  return res.status(200).json({ token: createToken(getUser.id) });
};

module.exports = postLoginController;
