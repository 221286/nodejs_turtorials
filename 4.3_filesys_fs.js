//File System(fs) is another built in module
//requires is synchronous it's not a promise
const Filesys= require('fs');
const {readFileSync,writeFileSync}=Filesys;
const PATH= require("./4.2_Module_path.js");
//console.log(PATH.filepath);
//the writeFileSync It does 3 things
//1. Add text to your file we need the extra argument to pass to the methog{flag:"a"} this specifies add
//2. Update a text writefileSync(path,"contnet");
//3. Create a new file if the file does not exist.
writeFileSync(`./${PATH.filepath}`,"I know what iis",{flag:"a"})
writeFileSync("./Content/text1.txt","this is another file")
const read=readFileSync(`${PATH.filepath}`,"utf-8");
console.log(`${read}`);