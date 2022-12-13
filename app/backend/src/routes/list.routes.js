const express = require('express');
const listController = require('../controller/list.controller')
const validaToken  = require('../middleware/auth.midleware')

const route = express.Router()

route.post('/', validaToken, listController.createNewTodo)
route.get('/',validaToken, listController.getAllList)
route.get('/:id',validaToken, listController.getListById)
route.delete('/:id',validaToken, listController.deleteList)
route.put('/:id', validaToken, listController.updateList)

module.exports = route;