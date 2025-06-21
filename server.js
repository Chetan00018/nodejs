const express= require('express');
const db=require('./db')
const app = express()
const Person=require('./person')
const bodyparser=require('body-parser')
app.use(bodyparser.json());
app.get('/', (req, res) => {
  res.send('Hello World')  
})

app.post('/person',async(req,res)=>{
  try{
const data=req.body;
const newperson= new Person(data);

const responce=await newperson.save();
res.status(200).send("data saved")
  }
  catch(err){
console.log(err);
res.status(500).send("error")
  }
}
)
app.listen(3000);