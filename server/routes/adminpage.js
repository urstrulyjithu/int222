const express = require('express')
const router = express.Router()
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");
//const requireLogin = require("../middleware/requireLogin")
const JWT_SECRET = "secret";

const User = mongoose.model("User");
const Menu = mongoose.model("Menu");
const Order = mongoose.model("Order");

router.post("/addmenu" , (req , res)=> {
  const {name , description , price , photo} = req.body
  if(!name || ! description|| !price) {
    return res.status(422).json({error :"please add all the fileds"})
  }

  const menu = new Menu({
    name,
    description,
    price,
    photo : photo
    })
    menu.save().then(result => {
      res.json({menu : result})
    })
    .catch(err=> {
      console.log(err);
    })

})

router.get('/allorders', (req,res)=>{
    Order.find()
    .populate("orderedBy")
    .then((orders)=>{
        res.json({orders})
    }).catch(err=>{
        console.log(err)
    })

})


module.exports = router
