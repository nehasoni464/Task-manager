const mongoose= require('mongoose')

// mongoose.connect('mongodb://127.0.0.1:27017/tasksMongoose',{
//     useNewUrlParser:true,
//     useCreateIndex:true
// })
const taskSchema= new mongoose.Schema({
    description:{
        required:true,
        trim:true,
        type:String
    },
    completed:{
        default:false,
        type:Boolean},
        owner:{
            type:mongoose.Schema.Types.ObjectId,
            required:true,
            ref:'User'
}},{
    timestamps:true
})
const UserM=mongoose.model('UserM',taskSchema)
// const user2=new UserM({
//     description:'ppt',
//     completed:true
// })
// user2.save().then(()=>console.log(user2))
// .catch((error)=>{console.log('error',error)})
module.exports=UserM