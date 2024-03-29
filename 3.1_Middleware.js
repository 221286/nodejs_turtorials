//Middleware
//req=>Middleware=>respond
const express= require('express');
const app = express ();
const check=require('./Check_method');
//there is one problem if I want to use this check method on each and every route and suppose if there are a number of pages
//then we  can use the 'use'method in the middleware. 
//We can pass in some parameters too in the the use method to specify on which route shall the middleware get executed

app.use('/api',check);
app.get('/',(req,res)=>{

res.status(200).send('Home');
})
app.get("/api/about/you",(req,res)=>{
    res.status(200).send("api You");
})
app.get('/api/me/about',(req,res)=>{
    res.status(200).send('me about');
})
app.get('/about',(req,res)=>{
    res.status(200).send("About ");
})
app.listen(5000,()=>{
    console.log("working");
})