// const authService = require('../services/auth.service');
const jwt = require("../service/jwt.service");

const validateToken = async (req, res, next) => {
  const { authorization } = req.headers;
  const { type, message } = jwt.validateToken(authorization);
  if (type) {
    return res.status(type).json({ message });
  }
  req.user = message;
  next();
};

module.exports =  validateToken;
