const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type : String ,
    required:true
  },
  email: {
    type: String,
    required: true
  } ,
  password : {
    type : String,
    require : true
  } ,
  address : {
    type : String,
    require : true
  }
})
mongoose.model("User" , userSchema)
