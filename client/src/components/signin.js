
import React, {useState, useContext , useReducer} from "react"
import { useHistory} from "react-router-dom"
import {UserContext} from "../App"
import M from "materialize-css"
const Signin =() => {
  const {state, dispatch} =useContext(UserContext)
  const history = useHistory()
  const [email , setEmail] = useState("")
  const [password , setPassword] = useState("")
  const PostData = () =>{
    console.log(email);
    console.log(password);
    if(!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)){
        M.toast({html: "invalid email",classes:"#c62828 red darken-3"})
    }
    fetch("/signin" , {
      method:"post",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        email,
        password
      })
    }).then(res=>res.json())
      .then(data=>{
        console.log(data);
        if(data.error){
            M.toast({html: data.error,classes:"#c62828 red darken-3"})
         }
         else{
            localStorage.setItem("jwt" , data.token)
            localStorage.setItem("user" , JSON.stringify(data.user))
            dispatch({type:"USER",payload:data.user})
            M.toast({html:"signed in successfully",classes:"#43a047 green darken-1"})
            history.push("/")
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
                                       <h2 className="title">Sign in</h2>
                                           <div className="login_form">
                                               <ul>
                                                   <li>
                                                       <label for="EmailAddress">Email Address</label><br/>
                                                     <input className="form-control" id="EmailAddress" type="email" value = {email} onChange={(e)=> setEmail(e.target.value)}></input>
                                                   </li>
                                                   <li>
                                                       <label for="Password">Password</label><br/>
                                                        <input className="form-control" id="Password" type="password" value = {password} onChange={(e)=> setPassword(e.target.value)}></input>
                                                   </li>
                                                   <li>
                                                       <button type="submit" className="loginbutton red_btn trans squre-btn hvr-ripple-out" onClick={()=>{PostData()}}>Login</button>
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
export default Signin
