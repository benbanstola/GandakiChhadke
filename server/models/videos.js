const mongoose=require('mongoose');
const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');
const { response } = require('express');
const config=require('../config/config').get(process.env.NODE_ENV);
const SALT_I=10;

const videoSchema=mongoose.Schema({
    title:{
        type:String,
    },
    description:{
        type:String,
    }
})

const Videos=mongoose.model('videos',videoSchema)
module.exports={Videos};