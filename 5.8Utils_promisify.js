//Promisify and utils
const { readFile, writeFile } = require("fs");
const UTILS = require(`util`);
const readthis=UTILS.promisify(readFile);
const writethis = UTILS.promisify(writeFile);
async function Lets(){
    const readread=await readthis(`./Content/Subfolder/read.txt`,`utf-8`);
    const readtext= await readthis(`./Content/text1.txt`,'utf-8');
    await writethis('./Content/good.txt',`This is a good example`,{flag:`a`});
    console.log(readread,readtext);
}
Lets();

//Now we will deal directly with the promises.