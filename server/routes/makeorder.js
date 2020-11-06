const express = require('express')
const router = express.Router()
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");
const requireLogin = require("../middleware/requireLogin")
const JWT_SECRET = "secret";

const User = mongoose.model("User");
const Menu = mongoose.model("Menu");
const Order = mongoose.model("Order");

router.post("/order" ,requireLogin , (req , res)=> {
  const {name ,price } = req.body
  if(!name ||!price) {
    return res.status(422).json({error :"please add all the fileds"})
  }

  const order = new Order({
    name,
    price,
    orderedBy : req.user
    })
    order.save().then(result => {
      res.json({order : result})
    })
    .catch(err=> {
      console.log(err);
    })

})
router.get('/allmenu',requireLogin, (req,res)=>{
    Menu.find()
    .then((menu)=>{
        res.json({menu})
    }).catch(err=>{
        console.log(err)
    })

})

router.get("/myorders" , requireLogin ,(req , res) => {

    Order.find({orderedBy: req.user._id})
    .populate("orderedBy","_id name")
    .then(myorders=>{
      res.json({myorders})
    })
    .catch(err=>{
      console.log(err);
    })
})
module.exports = router
