// const { User } = require('../models');
// const { generateToken } = require('../middlewares/jwtToken');

// const servicePostUSer = async (displayName, email, password, image) => {
//   const emailExist = await User.findOne({ where: { email } });
//   if (emailExist) {
//     const err = ('User already registered');
//     throw err;
//   } else {
//       const user = await User.create({ displayName, email, password, image });
//       return { token: generateToken(user.id) };
//   }
// };

// module.exports = servicePostUSer;