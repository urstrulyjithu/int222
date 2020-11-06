import React, { Component , useEffect , createContext , useReducer , useContext}  from 'react';
import logo from './logo.svg';
import './App.css';
import './bootstap.css';
import {BrowserRouter , Route ,Switch , useHistory} from "react-router-dom"
import Signin from "./components/signin"
import Signup from "./components/signup"
import Navbar from "./components/Navbar"
import Menu from "./components/Menu"
import Cart from "./components/Cart"
import Home from "./components/Home"
import AddMenu from "./components/Admin/AdminUpload"
import NewOrders from "./components/Admin/NewOrders"
import {reducer , initialState} from "./reducers/userReducer"

export const UserContext = createContext()

const Routing = ()=> {
  const history = useHistory()
  const {state,dispatch} = useContext(UserContext)
  useEffect(()=>{
    const user = JSON.parse(localStorage.getItem("user"))
  /*if(user){
      history.push("/Cart")
    }else{
      history.push("/signin")
    }*/
  })
  return(
    <Switch>
     <Route exact path="/">
      <Home/>
      </Route>
      <Route exact path="/Cart">
       <Cart/>
       </Route>
      <Route exact path="/Menu">
        <Menu/>
       </Route>
      <Route exact path="/signin">
       <Signin/>
      </Route>
      <Route exact path="/signup">
        <Signup/>
      </Route>
      <Route exact path="/admin">
        <AddMenu/>
      </Route>
      <Route exact path="/neworders">
        <NewOrders/>
      </Route>

    </Switch>
  )
}
function App() {
  const [state , dispatch] = useReducer(reducer , initialState)

  return (
    <UserContext.Provider value={{state,dispatch}}>
    <BrowserRouter>
    <Navbar/>
    <Routing/>
    </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
