const { Users } = require('../models');

const getUserController = async (req, res) => {
  try {
    const getAll = await Users.findAll({ attributes: { exclude: ['password'] } });
    res.status(200).json(getAll);
  } catch (error) {
    res.status(401).json({ message: error.message });
  }
};

module.exports = getUserController;