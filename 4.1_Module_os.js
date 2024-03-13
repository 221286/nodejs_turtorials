//"os" is a built in modules provided more usefull method and properties to interact with the operating system
//"os" gives use acces to the operating system functions
//const {userInfo,uptime}=require('os');
const oper=require("os");
const {release,totalmem,freemem}=require("os")
const currentos ={
    name:oper.type(),
    release:release(),
    totalMem:totalmem(),
    freeMem:freemem()

}
console.log(currentos);