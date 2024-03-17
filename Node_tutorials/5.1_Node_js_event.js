const {readFile}=require('fs');
console.log("first");
//readFile is an async function
readFile("./Content/text1.txt","utf-8",(err,result)=>{
    if(err){
        return
    }
    
        console.log(result);
        console.log("second");
    
})
console.log("third");