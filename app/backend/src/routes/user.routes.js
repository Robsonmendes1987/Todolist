const express = require('express');
const userController = require('../controller/user.controller')


const route = express.Router()

route.post('/register', userController.creatUser)

module.exports = route;