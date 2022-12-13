const express = require('express')
const routeUser = require('./routes/user.routes')
const routeLIst = require('./routes/list.routes')
const loginUser = require('./routes/login.routes')
const cors  = require('cors')

const app = express();

app.use(express.json())
app.use(cors())
app.use('/user', routeUser)
app.use('/newtodo',  routeLIst)
app.use('/login', loginUser)

module.exports = app;