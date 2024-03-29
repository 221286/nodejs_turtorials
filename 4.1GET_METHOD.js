//Get Method to read the data

const express=require('express');
const app= express();
const {people}=require('./data')
//app.use
app.get('/app/json',(req,res)=>{
res.status(200).send({success:true,data:people});
})
app.listen(5000,()=>{
    console.log("Listening to the port 5000....")
})