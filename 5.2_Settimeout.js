console.log("First");
//all the immediate code after the async code gets executed
setTimeout(()=>{
    console.log("second");
},0);
console.log("third");