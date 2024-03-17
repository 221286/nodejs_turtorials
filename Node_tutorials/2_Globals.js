//Global(globalthis) --No window
//It's basically an object that has some elements which can be accessed from anywhere in the Program
//Global is just like the window object although we don't get anything like the browser api functions like fetch
//Or we can't do any DOM manipulation like the browser did as we used the vanilla javascript
/* 
Ex-:require
filename
directoryname
module
process
*/
console.log(__dirname);
setInterval((()=>{
    console.log("Hii World")
}),1000);

