import React, {useState, useContext , useReducer,useEffect } from "react"

import { useHistory} from "react-router-dom"
//import {UserContext} from "../../App"
import M from "materialize-css"
const AddMenu =() => {
  const history = useHistory()
     const [name , setName ] = useState("")
     const [description , setDescription] = useState("")
     const [price , setPrice] = useState("")
     const [image , setImage] = useState("")
     const [url , setUrl] = useState("")

     useEffect(()=> {
       if(url){
         fetch("/addmenu" , {
           method:"post",
           headers:{
             "Content-Type":"application/json",
            "Authorization":"Bearer "+localStorage.getItem("jwt")
           },
           body:JSON.stringify({
             name,
             description,
             price,
             photo : url
           })
         }).then(res=>res.json())
           .then(data=>{
             if(data.error){
                 M.toast({html: data.error,classes:"#c62828 red darken-3"})
              }
              else{

                  M.toast({html:"post created",classes:"#43a047 green darken-1"})
                  history.push("/")
                }
           }).catch(err=>{
                 console.log(err)
             })
       }

     },[url])
     const postDetails = ()=>{
         const data = new FormData()
         data.append("file",image)
         data.append("upload_preset","instagram-clone")
         fetch("https://api.cloudinary.com/v1_1/dlntbxltl/image/upload",{
             method:"post",
             body:data
         })
         .then(res=>res.json())
         .then(data=>{
           console.log(data);
            setUrl(data.url);
            console.log(url)
         })
         .catch(err=>{
             console.log(err)
         })


     }

     return(

       <div className="card input-filed" style={{
         top : "100px",
         margin:"30px auto",
         maxWidth:"500px",
         padding:"20px",
         textAlign:"center"
       }}>
       <input type = "text" placeholder="name" value={name} onChange ={(e)=>setName(e.target.value)}/>
       <input type = "text" placeholder="description" value={description} onChange ={(e)=>setDescription(e.target.value)}/>
       <input type = "text" placeholder="price" value={price} onChange ={(e)=>setPrice(e.target.value)}/>
       <div className="file-field input-field">
               <div className="btn #64b5f6 blue darken-1">
         <span>File</span>
         <input type="file" onChange ={(e)=>setImage(e.target.files[0])} />
       </div>
       <div className="file-path-wrapper">
         <input className="file-path validate" type="text"/>
       </div>
       </div>
       <button className="btn waves-effect waves-light #64b5f6 blue darken-1" onClick={()=>postDetails()}>
                  Add Menu
              </button>
     </div>

  )
}
export default AddMenu
;
