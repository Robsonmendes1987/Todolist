const loginService = require('../service/login.service');
const loginValidate = require('../validations/user.validations');

const login = async (req, res) => {
  const { type, message } = loginValidate(req.body);

  if (type) {
    return res.status(type).json({ message });
  }
  const token = await loginService.login(req.body);

  if (token.type) return res.status(token.type).json({ message: token.message });

  return res.status(200).json({ token });
};

module.exports = {
  login,
};
