const express=require('express');
const app = express();
const PATH=require('path');
const absolute_nav_path=PATH.resolve(__dirname,'./navbar-app/index.html');
//static means to get the file as it is . The CSS in CSS form the logo in the logo form js in the js form
app.use(express.static('./public'));
app.get('/',(req,res)=>{
    res.status(200).sendFile(absolute_nav_path);

})
app.listen(5000,()=>{
    console.log('Set up the server at port 5000...');
})