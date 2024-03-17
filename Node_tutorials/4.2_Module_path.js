//Path - path is a built in module.
//We will require the path module
const PATH = require("path");
//path.join() method joins the the given path segement into one path
//this is basically like the concatenation of the paths into one path in the file adderess format
const str1="good";
const str2="bad";
//console.log(str1.split(''));

const filepath= PATH.join('./Content/','Subfolder','read.txt');

//console.log(filepath);
//this returns the given basename

const base= PATH.basename(filepath);
//console.log(base);
//PATH.sep returns the seperator that is "/".
//console.log(PATH.sep);
//path.resolve(__dirname,content); this gives us the absolute path in return
const absolute=PATH.resolve(__dirname,filepath);
///console.log(__dirname);
///console.log(absolute);
module.exports={filepath};

