const {createServer}=require(`http`);
//normal was
//const server = createServer((req,res)=>{
//res.end("hi");
//})
//Earlier we used to pass callback function in the createevent arguments 

//using event emmitter API

const server= createServer();
//server extends eventsEmmiter so we don't need to extend server on our own.
//emits request event
//subscribe or listen to it||respond to it
server.on('request',(req,res)=>{
    res.end(`<h1>This is the hearder</h1>`)

});

server.listen('2000');