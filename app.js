const { createReadStream}= require(`fs`);
const {createServer}= require(`http`);
const server= createServer();
server.on('request',(req,res)=>{
    //As we can see we can control the data using the highwatermark attributes.
    const text=createReadStream(`./Content/good.txt`,{highWaterMark:70,encoding:`utf-8`});
   /* text.on('data',(result)=>{
        res.end(result);
    })
    */
   text.on('open',()=>{
    //pipe function writes the readed code
     text.pipe(res);
   })
   text.on('error',(err)=>{
    res.end(err);
   })
})

server.listen(4000);