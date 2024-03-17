//created a class now to listen to an event or emit the vent we need to create the instance of the class to invoke it.
const Eventemmitter= require(`events`);
//created a custom Emmitter by creating the instance of a class
const customEmmitter = new Eventemmitter();
//listen the event by using the on method
customEmmitter.on(`response`,(user,formed)=>{
    console.log(`Good one ${user} ${formed}`)
});
customEmmitter.on('response',()=>{
    console.log(`some other logic here`);
});
//emmiting the event
customEmmitter.emit('response',`Anis`,"formed");