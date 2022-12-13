const { User } = require('../models');
const jwtUtil = require('../service/jwt.service');

const login = async ({ email, password }) => {
  const user = await User.findOne({ where: { email } });

  if (!user || user.password !== password) {
    return { type: 400, message: 'Invalid fields' };
  } 

  const { password: _, ...userWithoutPassword } = user.dataValues;

  const token = jwtUtil.createToken(userWithoutPassword);

  return token;
};

module.exports = {
  login,
};
