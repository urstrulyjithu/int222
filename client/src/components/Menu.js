import React, {useState , useEffect} from "react"

const Menu =() => {
  const [data , setData] = useState([])
  useEffect(() =>{
    fetch("/allmenu" , {
      headers:{
        "Authorization":"Bearer "+localStorage.getItem("jwt")
      }
    }).then(res=>res.json())
    .then(result=>{
      console.log(result)
      setData(result.menu)
    })
  },[])
  return (
    <div className="raw">
    {
      data.map(item=>{
        return(
          <div className="left_cntbar">
           <div className="pizza_items">
            <div className="row">
             <div className="col-lg-4 ">
              <div className="P_itmesbox" >
               <div className="PT_image"><img src={item.photo} className="absoImg" alt=""/></div>
                <div className="PT_dscr">
                 <h3 className="PT_title">{item.name}</h3>
                 <p className="PT_dtls"> {item.description}</p>
                  <div className="PT_optn">
                   <ul className="PT-radio">
                    <li>
                      <input type="radio" name="radio-group-1" id="radio-1" checked="checked" />
                      <label for="radio-1">Medium</label>
                    </li>
                    <li>
                      <input type="radio" name="radio-group-1" id="radio-2" />
                      <label for="radio-2">Large</label>
                    </li>
                    <li>
                      <input type="radio" name="radio-group-1" id="radio-3" />
                      <label for="radio-3">Extra Large</label>
                    </li>
                  </ul>
                </div>
                <div className="price_block">
                 <div className="price">{item.price} </div>
                    <a href="#" className="card_btn">Add to cart</a>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
        )
      })
    }

</div>

  )
}
export default Menu
