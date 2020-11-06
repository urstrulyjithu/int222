import React, {useState, useContext , useReducer} from "react"

import {Link, useHistory} from "react-router-dom"
import {UserContext} from "../App"
import M from "materialize-css"

const Navbar =()=>{
  const history = useHistory()
  const {state , dispatch} = useContext(UserContext)
    const user = JSON.parse(localStorage.getItem("user"))
  const renderList = () => {
    if(user){
      return[
        <li><a href="/" className="trans hvr-underline-from-left">Home</a></li>,
        <li><a href="/menu" className="trans">Order</a></li>

      ]
    } else {
      return [
        <li><a href="/signin" className="trans">Login</a></li>,
        <li><a href="/signup" className="trans">Register</a></li>


      ]
    }
  }
  const renderCart = () => {
    if(user){
      return[
        <span className="Cart_count">Cart : (0) $00.00</span> ,

        <img className="cart_img" src="./images/cart_1.webp" alt="cart_1"/>,

        <button className="btn #c62828 red darken-3"
          onClick={()=>{
            localStorage.clear()
            dispatch({type:"CLEAR"})
            history.push("/signin")
          }}>
          logout
          </button>
      ]
    }
  }

  return (
    <header id="Header">
            <div className="main_header inner_page">
    <div className="top_nav" id="navbar">
                      <div className="container">
                          <div className="row">
                              <div className="col-md-12">
                                  <div className="logo">
                                      <a href="/menu" title="Crave Ordering"><p>Lovely pizzas</p></a>
                                  </div>
                                  <div className="nav_manu">
                                      <div className="Menu_list">
                                          <ul className="menu">
                                            {renderList()}
                                          </ul>
                                      </div>
                                      <div className="Cart">
                                          <a href="/cart" title="Cart">
                                              {renderCart()}
                                          </a>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
                  </div>
                  </header>
  )

}

export default Navbar
