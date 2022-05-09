const { Users } = require('../models');

const getByIdController = async (req, res) => {
  const { id } = req.params;
  try {
    const getById = await Users.findByPk(id);
    if (!getById) {
      return res.status(404).json({ message: 'User does not exist' });
    }
    res.status(200).json(getById);
  } catch (error) {
    res.status(401).json({ message: error.message });
  }
};

module.exports = getByIdController;