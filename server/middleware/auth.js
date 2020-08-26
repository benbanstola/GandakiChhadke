const {Landlord}=require('../models/users');


let Auth=(req,res,next)=>{
    let token=req.cookies.auth;
    Landlord.findByToken(token,(err,user)=>{
        if (err)  throw err
        if (!user)  return res.json({
            error:true
        })
        req.token=token
        req.user=user
        next()

    })
}
module.exports={Auth}