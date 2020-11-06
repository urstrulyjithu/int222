const mongoose = require('mongoose');

const menuSchema = new mongoose.Schema({
  name: {
    type : String ,
    required:true
  },
  description: {
    type: String,
    required: true
  } ,
  price : {
    type : String,
    require : true
  },
  photo : {
    type :String,
    require : true
  }

})

mongoose.model("Menu" , menuSchema)
