const express=require('express');
const bodyParser=require('body-parser');
const cookieParser=require('cookie-parser');
const mongoose=require('mongoose');
const config=require('./config/config').get(process.env.NODE_ENV);
const app=express();
const {Landlord}=require('./models/users');
const {Videos}=require('./models/videos');
require('dotenv').config('./config/config');
const {Auth}=require('./middleware/auth');
mongoose.Promise=global.Promise;
mongoose.connect(config.DATABASE,{useNewUrlParser: true, useUnifiedTopology: true,useCreateIndex: true})

app.use(bodyParser.json());
app.use(cookieParser()); 






app.post('/api/registerUser',(req,res)=>{
    const landlord=new Landlord(req.body)

    landlord.save((err,doc)=>{
        if (err) return res.status(400).send(err)
        res.status(200).json({
            success:true,
            LandlordID:doc._id
        })
    })
})


app.post('/api/login',(req,res)=>{
    Landlord.findOne({'phone':req.body.phone},(err,user)=>{
        if (!user) return res.json({isAuth:false, message:'User does not exist'})
        user.comparePassword(req.body.password,(err,isMatch)=>{
            if (!isMatch) return res.json({
                isAuth:false,
                message:'Wrong password.'
            })
user.generateToken((err,user)=>{
    if (err) return res.status(400).send(err)
    res.cookie('auth',user.token).json({
        isAuth:true,
        id:user._id,
        phone: user.phone
    })
})
        })
    })
 })

 
 app.get('/api/auth',Auth,(req,res)=>{
    res.json({
        isAuth:true,
        id:req.user._id,
        phone:req.user.phone,
        name:req.user.name,
        lastname:req.user.lastname
    })
});


app.get('/api/logout',Auth,(req,res)=>{
    req.user.deleteToken(req.token,(err,user)=>{
        if(err) return res.status(400).send(err);
        res.sendStatus(200)
    })
})

app.get('/api/getVideos',(req,res)=>{
    let limit=parseInt(req.query.limit)
    let skip=parseInt(req.query.skip)

    Videos.find().sort('-date').skip(skip).limit(limit).exec((err,videos)=>{
        if (err) return res.json({err})
        res.json({videos:videos})
    })
})
app.get('/api/getPopularVideos',(req,res)=>{
    let limit=parseInt(req.query.limit)
    let skip=parseInt(req.query.skip)

    Videos.find().sort('-views').skip(skip).limit(limit).exec((err,videos)=>{
        if (err) return res.json({err})
        res.json({videos:videos})
    })
})
app.get('/api/getVideo',(req,res)=>{
    let id=req.query.id
    
   
    Videos.findById(id,(err,videos)=>{
        if (err) return res.json({err})
        Videos.find({_id: {$gt: id}}).sort({_id: 1 }).limit(1).exec((err,next)=>{
            if (err) return res.json({err})
            Videos.find({_id: {$lt: id}}).sort({_id: -1 }).limit(1).exec((err,previous)=>{
                if (err) return res.json({err})
                res.json({videos:videos, next:next, previous:previous})
        })
    })         
})
})

const port= process.env.PORT;
app.listen(port, ()=>{
    console.log("server is running", port)
})
