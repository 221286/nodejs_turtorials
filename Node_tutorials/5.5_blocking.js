const {writeFileSync}=require(`fs`);
for(let i=0;i<100000;i++){
    writeFileSync('./Content/good.txt',`hell not there${i}\n`,{flag:'a'});
}

console.log("hil");