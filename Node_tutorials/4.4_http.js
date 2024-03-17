const HTTP= require('http');
const server=HTTP.createServer((req,respond)=>{
    if(req.url==='/about'){
        respond.end(`<h1>This is about page</h1>`)
    }if(req.url==='/'){
        respond.write("this is home")
        respond.end();
    } respond.end('<p>Oopes some other page</p><span>Got to</span><a href="/">Home</a>')
    
})
server.listen(2000);
//erroe occurs when yout try to send more than one response