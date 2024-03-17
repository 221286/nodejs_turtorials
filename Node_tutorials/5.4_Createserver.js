const { createServer } = require("http");

const server=createServer((req,res)=>{
   
    res.end("Go back coward");
    console.log("hello World")
})
server.listen(2000,()=>{
    console.log("This one check")
})