const { Categories, BlogPosts, Users } = require('../models');

const getPost = async (req, res) => {
  try {
    const getAll = await BlogPosts.findAll({
      include: [{ model: Users, as: 'user', attributes: { exclude: 'password' } },
      { model: Categories, as: 'categories' }] });
    return res.status(200).json(getAll);
  } catch (error) {
    res.status(401).json({ message: error.message });
  }
};

const getById = async (req, res) => {
  try {
    const { id } = req.params;
    const getPostById = await BlogPosts.findByPk(id, {
      include: [
        { model: Users, as: 'user', attributes: { exclude: ['password'] } },
        { model: Categories, as: 'categories', through: { attributes: [] } },
      ],
    });
    if (!getPostById) {
      return res.status(404).json({ message: 'Post does not exist' });
    }
    return res.status(200).json(getPostById);
  } catch (err) {
    res.status(401).json({ message: err.message });
  }
};

module.exports = {
  getPost,
  getById,
};
