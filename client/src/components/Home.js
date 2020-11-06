import React, {useState, useContext , useReducer} from "react"

//import {Link, useHistory} from "react-router-dom"
//import {UserContext} from "../../App"
import M from "materialize-css"
const Home =() => {
  return(
    <div>
    <div class="H_banner home">
                    <div class="main_pitch">
                        <h1 class="page_title">Order Online Your Food</h1>
                        <h3 class="cntct">Call us<span class="call_desk"><a href="tel:+01234567890" id="typewriter_num"></a></span></h3>
                    </div>
                </div>
    <div className="hwork" style={{
      top : "70px"
    }}>
              <div className="container">
                  <div className="row">
                      <div className="col-lg-12">
                          <div className="main_hwork">
                              <ul>
                                  <li className="order">
                                      <div className="title"><img src="images/h_img1.png" alt=""/></div>
                                  </li>
                                  <li className="deliver_L">
                                      <div className="title"><img src="images/h_img2.png" alt=""/></div>
                                  </li>
                                  <li className="deliver_pick">
                                      <div className="title"> <img src="images/h_img3.png" alt=""/> </div>
                                  </li>
                              </ul>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
        </div>


  )
}
export default Home;
