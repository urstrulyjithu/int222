import React, {useState , useEffect} from "react"

const NewOrders =() => {
  const [data , setData] = useState([])
  useEffect(() =>{
    fetch("/allorders" , {
      headers:{
        "Authorization":"Bearer "+localStorage.getItem("jwt")
      }
    }).then(res=>res.json())
    .then(result=>{
      console.log(result)
      setData(result.orders)
    })
  },[])
  return (
    <div class="right_cntbar col-lg-3">
    {
      data.map(item=>{
        return (
          <div class="your_order">
              <div class="Order_title">
                  <span class="O_lefttitle">new orders </span>
                  <span class="O_cart"><a href="#" class="trans" title="Add To Cart"></a></span>
              </div>
              <div class="Order_number">
                  <ul>
                      <li>
                          <div class="Order_number">
                              <div class="Order_names">
                                  <span class="O_name">1x {item.name}</span>
                                  <span class="O_name">1x Mexican Pizza</span>
                                    <span class="O_name">orderby : {item.orderedBy.name}</span>
                                      <span class="O_name">address : {item.orderedBy.address}</span>

                              </div>
                              <div class="Order_price">
                                  <span class="O_price">180 </span>
                              </div>
                          </div>
                      </li>

                      </ul>
          </div>
          </div>


        )
      })
    }

                                    </div>
  )
}
export default NewOrders
