const mongoose = require('mongoose');
const {ObjectId} = mongoose.Schema.Types
const orderSchema = new mongoose.Schema({
  name: {
    type : String ,
    required:true
  },
  price : {
    type : String,
    require : true
  },
  orderedBy : {
    type : ObjectId,
    ref : "User"
  }
})

mongoose.model("Order" , orderSchema)
