//Module- Encapsulated code (only show minimum)It is basically an object in the node. 
const users=require("./3.3_names")
const stringed= require("./3.2_utils.js");
const {user1,user2}=users;
//As we can see there is a direct execution of the function as there is a single function in 
//that module 
require("./3.4_direct_exec");
stringed(user1);
stringed(user2);

//firstarrow("Anis");
//firstarrow(user1);
//firstarrow(user2);