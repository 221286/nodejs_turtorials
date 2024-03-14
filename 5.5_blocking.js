const {createServer}= require("http");
const server= createServer((req,res)=>{
    if(req.url==='/about'){
        //Blocking the code
        for(let i=0;i<10000000000;i++){
            for(let j=0;j<1000000000000;j++){
                 res.end('Hi this has taken too long');
                 console.log("did'nt")
            }
        }
    }
})
server.listen(2000,()=>{
    console.log("blocked");
})