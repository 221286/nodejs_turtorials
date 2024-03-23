const check=(req,res,next)=>{
    const method=req.method;
    const URL=req.url;
    const Year=new Date().getFullYear();
    console.log(method,URL,Year);
    next();
}

module.exports=check;