const express = require('express');
const listController = require('../controller/list.controller')

const route = express.Router()

route.post('/', listController.createNewTodo)
route.get('/', listController.getAllList)
route.get('/:id', listController.getListById)
route.delete('/:id', listController.deleteList)
route.put('/:id', listController.updateList)

module.exports = route;