const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
//const ejs = require('ejs');
const app = express()
//const {MONGOURI} = require("./keys");

app.use(express.static("public"));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({
  extended: true
}));

require("./models/user")
require("./models/orders")
require("./models/menu")
app.use(express.json())

app.use(require("./routes/auth"))
app.use(require("./routes/adminpage"))
app.use(require("./routes/makeorder"))
mongoose.connect("mongodb+srv://jithu07:JRK9QEqVTnSTu25@cluster0.gx3zo.mongodb.net/hotel?retryWrites=true&w=majority" || "mongodb://localhost:27017/instaDB" ,  {useNewUrlParser: true , useUnifiedTopology: true})
mongoose.connection.on("connected" , () => {
  console.log("data base connected");
})
mongoose.connection.on("error" , (err) => {
  console.log("err" , err);
})
app.listen(5000 , ()=>{
  console.log("server is running on" , 5000 );
})
