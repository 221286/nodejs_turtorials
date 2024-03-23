const app=require('express')();
app.get('/',(req,res)=>{
    res.status(200).send("Hii");
});
app.all('*',(req,res)=>{
    res.status(404).send("Go to <a href-'/'>Home</a>")
})
app.listen(5000,()=>{
    console.log("up for the server");
});
//app.get
//app.POST
//app.PUT
//app.delete
//app.all
//app.use
//app.listen
