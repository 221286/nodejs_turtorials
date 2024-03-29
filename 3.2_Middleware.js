const express=require('express');
const app=express();
const check=require('./Check_method');
const authorize=(req,res,next)=>{
    const {user}=req.query;
    if(user){
        req.user={name:"anis",id:2};
    }
    next();
}
app.use([check,authorize]);

app.get("/",(req,res)=>{
    res.status(200).send("This is home");
});
app.get('/api',(req,res)=>{
    console.log(req.user);
    res.status(200).send("This is the api");
})
app.listen(5000,()=>{
    console.log("listening to port 5000...");
})