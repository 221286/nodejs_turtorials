const express= require('express');
const app=express();
//For making the paricular folder available for all
app.use(express.static('./methods-public'))
//For form data
app.use(express.urlencoded({extended:false}));
//for json data
app.use(express.json());
app.listen(5000,()=>{
    console.log('listening to port 50000....');
})