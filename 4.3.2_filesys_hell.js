const { error } = require('console');
const {readFile,writeFile}=require('fs');
//readfile take 3 arguments 1st path 2nd code type 3rd callback
//same goes for writeFile
readFile('./Content/Subfolder/read.txt',"utf-8",(error,results)=>{
    try{ console.log(results);
        readFile('./Content/text1.txt',"utf-8",(error,results)=>{
            try{
              writeFile("./Content/text1.txt","This is the best content ever",{flag:"a+"},(error)=>{
                if(error){
                    console.error(error);
                }
              })
             console.log(results);

            }catch(err){
               console.log(error);
            }
        })
    }catch(e){
console.log(error);
    }

})