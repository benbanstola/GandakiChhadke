const mongoose=require('mongoose');
const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');
const { response } = require('express');
const config=require('../config/config').get(process.env.NODE_ENV);
const SALT_I=10;

const landlordSchema=mongoose.Schema({
    name:{
        type:String,
        maxlength:100
    },
    lastname:{
        type:String,
        maxlength:100
    },
    password:{
        type:String,
        required:true,
        minlength:6
    },
    phone:{
        type:Number,
        required:true,
        unique:1
    },
    token:{
        type:String
    }

})

landlordSchema.pre('save',function(next){
    var user=this
    if (user.isModified('password')){
        bcrypt.genSalt(SALT_I,function(err,salt){
            if (err) return next(err)
            bcrypt.hash(user.password,salt,function(err,hash){
                if (err) return next(err)
                user.password=hash
                next()
            })

        })
    }
    else{
        next()
    }
})

landlordSchema.methods.comparePassword= function(candidatePassword,cb){
    bcrypt.compare(candidatePassword,this.password,function(err,isMatch){
        if (err) return cb(err)
        cb(null, isMatch)
    })
}

landlordSchema.methods.generateToken=function(cb){
var user=this
var token=jwt. sign(user._id.toHexString(),config.SECRET)
user.token=token
user.save(function(err,user){
if (err) return cb(err)
cb(null,user)
})
}


landlordSchema.statics.findByToken = function(token,cb){
    var user  = this;

    jwt.verify(token,config.SECRET,function(err,decode){
        user.findOne({"_id":decode,"token":token},function(err,user){
            if(err) return cb(err);
            cb(null,user)
        })
    })
}

landlordSchema.methods.deleteToken = function(token,cb){
    var user = this;

    user.update({$unset:{token:1}},(err,user)=>{
        if(err) return cb(err);
        cb(null,user)
    })
}



const Landlord=mongoose.model('Landlord',landlordSchema)
module.exports={Landlord};