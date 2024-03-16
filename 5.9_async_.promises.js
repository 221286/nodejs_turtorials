const {writeFile,readFile}=require(`fs`).promises;
async function best(){
    const readread=await readFile(`./Content/Subfolder/read.txt`,`utf-8`);
    const readtext=await readFile(`./Content/text1.txt`,`utf-8`);
    await writeFile(`./Content/good.txt`,'This is added now',{flag:'a'});
    console.log(readread,readtext);

}

best();