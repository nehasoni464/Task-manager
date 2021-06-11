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

    





app.listen(port,()=>{
    console.log('server'+port)
})

const main = async()=>{
    // const task = await Task.findById('')
    // await task.populate('owner').execPopulate()
    const user = await User.findById('')
    await user.populate('tasks').execPopulate()
}
main()