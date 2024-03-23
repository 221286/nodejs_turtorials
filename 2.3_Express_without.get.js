//Setting up the express without .get
const express=require('express');
const app=express();
const PATH=require('path');
app.use(express.static(PATH.resolve(__dirname,'./public')))
/*app.get('/',(req,res)=>{

})*/
app.listen(5000,()=>{
    console.log("set up the port 5000");
})