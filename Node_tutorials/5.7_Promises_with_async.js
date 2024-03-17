const {readFile}=require(`fs`)

//Now there is a problem we need to create a promise each and every time we want to use some other files
//to handle this we will use some inbuilt promises like promisify or promises
//lets see them one by one  
const performpromise=(Path)=>{
    return new Promise((resolve,reject)=>{
        readFile(Path,"utf-8",function(err,res){
            if(res){
                resolve(res)
            } else{
                reject(err);
            }
        })
        
    })
}
async function test(){
    try {
        const readread=await performpromise('./Content/Subfolder/read.txt');
        const readtext=await performpromise("./Content/text1.txt");
        console.log(readread,readtext);
    } catch(error){
        console.log(error);
    }
    

}
test();