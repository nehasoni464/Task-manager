const express = require('express')
require('./db/mongoose')
const User=require('./db/model/user')
const userRouter=require('./routers/user')
const taskRouter=require('./routers/task')
const Task=require('./db/model/task')

const app = express()
const port= process.env.PORT 
 
const multer= require('multer')


app.use(express.json())
app.use(userRouter)
app.use(taskRouter)
app.use(taskRouter)

    module.exports = app

    





