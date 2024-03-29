const express= require('express');
const app= express();
const {people}=require('./data');
//static method
app.use(express.static('./methods-public'));
//form data
app.use(express.urlencoded({extended:false}));
//json data
app.use(express.json());
//on frontend we perfom the get request tot he same server as we have in the backend here it is /api/people.
//In app.get I am reading the data
app.get('/api/people',(req,res)=>{
    res.status(200).json({success:true,data:people});
    
})
//In app.post I am going to add the data the address given even if same are different.
app.post('/api/people',(req,res)=>{
    const {name}=req.body;
    if(!name){
        return res.status(400).json({success:false,msg:"Please Enter the credentials"})
    }
    res.status(201).json({success:true,person:name});

})
app.post('/login',(req,res)=>{
    const {name}=req.body;
    if(name){
        return res.status(200).send(`Welcome ${name}`);
    }
    res.status(404).send('Please Enter the right credentials');

})
app.listen(5000,()=>{
    console.log('Listening to the port 5000....')
})