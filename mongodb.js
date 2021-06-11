



// const mongodb= require('mongodb')
// const MongoClient=mongodb.MongoClient
// const ObjectID =mongodb.ObjectID
// const id= new ObjectID()



// const connectionURL='mongodb://127.0.0.1:27017'
// const databaseName='task-manager'

// MongoClient.connect(connectionURL,{useNewUrlParser:true},(error,client)=>{
//     if(error){
//         return console.log("something went wrong", error)

//     }
//     console.log("everything is working perfectly")

    
//        const db = client.db(databaseName)


// // db.collection('users').find({name:"neha"}).toArray((error,result)=>{
// //     // if(error){
// //     //   return  console.log("error")
// //     // }
// //     console.log(result)
// // }
// // )


// //find and find one in Tasks

// // db.collection('tasks').findOne({_id:new ObjectID("604c7e14281fe428f2b78ead")},(error,result)=>{
// //     if(error)
// //     {
// //     return    console.log("error in Tasks")
// //     }
// //     console.log(result)

// // })

// // db.collection('tasks').find({completed:true}).toArray((error,result)=>{
// //     if(error)
// //     {
// //     return    console.log('error')
// //     }
// //     console.log(result)
// // })
// ////update one

// // db.collection('users').updateOne({
// //     name:"neha"

// // },{ $set:{
// //     name:"khawish"
// // }}).then((result)=>{console.log(result)})
// //    .catch((error)=>{console.log(error)})


// ///*** updating in task */
// db.collection('tasks').updateMany({
 
//    completed:false
// },{
//     $set:{ completed:true}
// }).then((result)=>{console.log(result)})
// .catch((error)=>console.log(error))


// //        db.collection('users').insertOne({
// //         name:'neha',
// //        Learning:"Nodejs"
// //         },(error,result)=>{
// //             if(error){
// //         return console.log("Error h bhai")
// //      }
// //     console.log(result.ops)
// //         }
// // )

// // db.collection('users').insertMany([
// //     {name:'neha',
// //     Learning:'Reactjs',
// //     completed:true},
// //     {
// //         name:"sky",
// //         Learning:'GO',
// //         completed:false
// //     },{
// //         name:'Naina',
// //         Learning:'git',
// //         completed:false
// //     }
// // ],(error,result)=>{
// //     if(error){
// //      return   console.log("error")
// //     }
// //     console.log(result.ops)

// // })


// // db.collection('tasks').insertMany([
// //     {
// //         description:"PPT",
// //         completed:false
// //     },
// //     {
// //         description:"Reactjs",
// //         completed:true
// //     },{
// //         description:'Nodejs',
// //         completed:false
// //     }
// // ],(error,result)=>{
// //     if(error){
// //        return console.log("oops error")
// //     }
// //     console.log(result.ops)
// // })







// })


