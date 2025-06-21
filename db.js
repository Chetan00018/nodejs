const mongoose=require('mongoose')

const mongourl='mongodb+srv://chetan:00000@gore.1o1ybmk.mongodb.net/hotels'

mongoose.connect(mongourl);

const db=mongoose.connection;

db.on('connected',()=>{
  console.log("mongodb connected")
})
db.on('error',(err)=>{
  console.log("mongodb connection error",err)
})
db.on('disconnected',()=>{
  console.log("mongodb disconnected")
})

module.exports=db;