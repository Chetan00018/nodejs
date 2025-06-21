const mongoose=require('mongoose');

const personschema=new mongoose.Schema({
  name:{
    type:String,
    require:true
  },
  work:{
    type:String,
    enum:["manager","chef","waiter"],
    require:true
  },
  age:{
    type:Number
  },
  mobile:{
    type:String,
    require:true
  },
  mail:{
    type:String,
    require:true,
    unique:true
  },
  address:{
    type:String
  },
  salary:{
    type:Number,
    require:true
  }
})

const Person=mongoose.model('Person',personschema);
module.exports=Person;