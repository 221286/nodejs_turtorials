const { readFileSync } = require("fs");
const {createServer}=require(`http`);
const { type } = require("os");
const homepage=readFileSync(`./navbar-app/index.html`);
const homepagecss=readFileSync(`./navbar-app/styles.css`);
const homepagejs=readFileSync(`./navbar-app/browser-app.js`);
const homepagesvg=readFileSync(`./navbar-app/logo.svg`)
const server=createServer((req,res)=>{
    const URL= req.url;
    console.log(URL);
    if(URL==='/'){
            //header with status code as first arguments and the content-type:type/sub-type as second arguments
        res.writeHead(200,{'content-type':`text/html`});
        res.write(homepage);
        //Mandatory
        res.end();
    
    }//style (css)
    else if(URL==='/styles.css') {
        res.writeHead(200,{'content-type':'text/css'});
        res.write(homepagecss);
        res.end();    
    } //image/logo 
    else if (URL==='/logo.svg'){
        res.writeHead(200,{'content-type':`image/svg+xml`})
        res.write(homepagesvg);
        res.end();
    }//logic(javascript)
    else if(URL==='browser-app.js'){
        res.writeHead(200,{"content-type":"text/javascript"});
        res.write(homepagejs);
        res.end();
    }
    else if (req.url==='/about'){
        res.writeHead(200,{'content-type':'text/plain'});
        res.write('<h1>This is about page</h1>')
        res.end();
    } else {
        res.writeHead(400,{'content-type':`text/plain`})
        res.write("Woww error");
        res.end();
    }
    
})

server.listen(3000/* Port*/);