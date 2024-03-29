const express=require('express');
const app=express();
const {people}=require('./data')
//static assets
app.use(express.static('./methods-public'));
app.use(express.urlencoded({extended:false}));
//the 'api/people address and the one that you get in the javascript shall be the same for fetch method'
app.get('/api/people',(req,res)=>{
    res.status(200).send({success:true,data:people});
})
app.post('/login',(req,res)=>{
    const {name}=req.body;
    if(name){
        return res.status(200).send(`Welcome ${name}`)
    }
    res.status(401).send("Please fill in the correct credentials");
})
app.listen(5000,()=>{
    console.log("Listening to port 5000");
})