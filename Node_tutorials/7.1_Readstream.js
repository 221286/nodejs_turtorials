const {createReadStream}= require(`fs`);
const stream = createReadStream('./Content/good.txt',{highWaterMark:70000,encoding:"utf-8"});
//As we can see the given data is stramed with the size of 64 kb
//And at the end it is 22 kb
//default 64kb
//last buffer remainder
//highWaterMark- to set the streamed data length
//encoding:'utf-8'
//We don't need to create the custom emmitter directly we can listen to the 
//event directly 
stream.on('data',(result)=>{
    console.log(result);
})
