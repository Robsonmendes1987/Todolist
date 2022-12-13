const { User } = require("../models");
const validateUser = require("../validations/user.validations");
const jwtUtils = require("./jwt.service");

const creatUser = async ({ email, password }) => {
  const { type, message } = validateUser({ email, password });
  if (type) return { type, message };

  const user = await User.findOne({ where: { email } });
  if (user || user?.password === password) {
    return { type: 409, message: "User already registered" };
  }
  const newUser = await User.create({ email, password });

  const { password: _, ...userWithoutPassword } = newUser;
  const token = jwtUtils.createToken(userWithoutPassword);
  return { type: null, message: { token } };
};

module.exports = { creatUser };
