const UserService = require("../service/user.service");

const creatUser = async (req, res) => {
  const { type, message } = await UserService.creatUser(req.body);
  if (type) return res.status(type).json({ message });
  res.status(201).json(message);
};

module.exports = { creatUser };
