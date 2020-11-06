import React, {useState , useEffect} from "react"

const Cart = ()=>{
  const [data , setData] = useState([])
 useEffect(() =>{
   fetch("/myorders" , {
     headers:{
       "Authorization":"Bearer "+localStorage.getItem("jwt")
     }
   }).then(res=>res.json())
   .then(result=>{
     console.log(result)
     setData(result)
   })
 },[])
  return
}

export default Cart;
