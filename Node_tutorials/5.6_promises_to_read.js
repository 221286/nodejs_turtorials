const {readFile}=require("fs");

const POST = (Path)=>{
    return new Promise((resolve,reject)=>{
         readFile(Path,"utf-8",(err,results)=>{
           if(err){
            reject(err);
           }
           resolve(results);
         })
    })

}
POST("./Content/text1.txt")
.then(res=>console.log(res))
.catch(err=>console.error(err));