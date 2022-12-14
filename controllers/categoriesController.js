const { Categories } = require('../models');

const postCategories = async (req, res) => {
  const { name } = req.body;
  try {
    if (!name) {
      return res.status(400).json({ message: '"name" is required' });
    }
    const createCategories = await Categories.create({ name });
    return res.status(201).json(createCategories);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getCategories = async (req, res) => {
  try {
    const getAll = await Categories.findAll();
    res.status(200).json(getAll);
  } catch (error) {
    res.status(401).json({ message: error.message });
  }
};

module.exports = {
  postCategories,
  getCategories,
};
