import React, {useState, useContext , useReducer} from "react"

import {useHistory} from "react-router-dom"
//import {UserContext} from "../../App"
import M from "materialize-css"
const Signup =() => {
const history = useHistory()
const [name , setName] = useState("")
const [email , setEmail] = useState("")
const [password , setPassword] = useState("")
const [address , setAddress] = useState("")
const PostData = () => {
   if(!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)) {
     M.toast({html: "invalid email",classes:"#c62828 red darken-3"})
   }
   fetch("/signup" , {
     method:"post",
     headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify({
          name,
          address,
          email,
          password
        })
   })
   .then(res=>res.json())
        .then(data=>{
          if(data.error){
              M.toast({html: data.error,classes:"#c62828 red darken-3"})
           }
           else{
               M.toast({html:data.message,classes:"#43a047 green darken-1"})
               history.push("/signin")
             }
        }).catch(err=>{
              console.log(err)
          })
}
  return (
    <section id="login">
           <div className="login_section">
               <div className="container">
                   <div className="row">
                       <div className="col-md-12">
                           <div className="main_login">
                               <div className="login_left col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                   <div className="login_box">
                                       <h2 className="title">Sign Up</h2>
                                           <div className="login_form">
                                               <ul>
                                               <li>
                                                   <label for="name">Name</label><br/>
                                                   <input className="form-control" id="name" value = {name} type="text" onChange={(e)=> setName(e.target.value)}></input>
                                               </li>
                                               <li>
                                                   <label for="Address">Address</label><br/>
                                                   <input className="form-control" id="EmailAddress" type="text" value = {address} onChange={(e)=> setAddress(e.target.value)}></input>
                                               </li>
                                                   <li>
                                                       <label for="EmailAddress">Email Address</label><br/>
                                                       <input className="form-control" id="EmailAddress" type="email" value = {email} onChange={(e)=> setEmail(e.target.value)}></input>
                                                   </li>
                                                   <li>
                                                       <label for="Password">Password</label><br/>
                                                       <input className="form-control" id="Password" type="password" value = {password} onChange={(e)=> setPassword(e.target.value)}></input>
                                                   </li>
                                                   <li>
                                                       <button type="submit" className="loginbutton red_btn trans squre-btn hvr-ripple-out" name="Login" onClick={()=>{PostData()}}>Login</button>
                                                   </li>
                                               </ul>
                                           </div>
                                      </div>
                               </div>
                            </div>
                         </div>
                      </div>
                    </div>
                 </div>
             </section>


  )
}
export default Signup
