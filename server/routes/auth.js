const express = require('express')
const router = express.Router()
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");
const requireLogin = require("../middleware/requireLogin");
const JWT_SECRET = "secret";

const User = mongoose.model("User");
const Menu = mongoose.model("Menu");
const Order = mongoose.model("Order");

router.post("/signup", (req , res)=> {
  const {email , password , name , address} = req.body
  if (!email || !password) {
     return res.status(422).json({error:"please add email or password"})
  }
  User.findOne({email:email})
  .then(savedUser=>{
    if(savedUser){
      return res.status(422).json({error:"user already exists"})
    }
    bcrypt.hash(password,12)
    .then(hashpassword=> {
      const user = new User({
        email ,
        password : hashpassword,
        name ,
        address
      })
      user.save()
      .then(user=>{
        res.json({message : "saved successfully"})
      })
      .catch(err=>{
        console.log(err);
      })
    })
  }).catch(err=>{
    console.log(err);
  })
})

router.post('/signin',(req,res)=>{
    const {email,password} = req.body
    if(!email || !password){
       return res.status(422).json({error:"please add email or password"})
    }
    User.findOne({email:email})
    .then(savedUser=>{
        if(!savedUser){
           return res.status(422).json({error:"Invalid Email or password"})
        }
        bcrypt.compare(password,savedUser.password)
        .then(doMatch=>{
            if(doMatch){
              console.log(JWT_SECRET);
                // res.json({message:"successfully signed in"})
               const token = jwt.sign({_id:savedUser._id}, JWT_SECRET)
               const {_id , name , email} = savedUser
               res.json({token,user:{_id,name,email} })
               //const {_id,name,email,followers,following,pic} = savedUser
               //res.json({token,user:{_id,name,email,followers,following,pic}})
            }
            else{
                return res.status(422).json({error:"Invalid Email or password"})
            }
        })
        .catch(err=>{
            console.log(err)
        })
    })
})



module.exports = router
//JRK9QEqVTnSTu25
