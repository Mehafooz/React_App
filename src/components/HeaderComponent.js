import { useContext, useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { userContext } from "../utils/userContext";
import { useSelector } from "react-redux";
const HeaderComponent = () => {
  const [loginText,setLoginText]=useState('Login');
  const { loggedInUser, setUserName } = useContext(userContext);
  const loginMech=()=>{
    if(loginText === 'Login'){
      setLoginText("Logout")
     
      
    }
    else{
      setLoginText("Login")
    
    }
    console.log("working")
  }
  const status = useOnlineStatus();
  const cartItems = useSelector((store)=>store.cart.items)

  

 

  useEffect(()=>{
    console.log("react head use effect")
  },[loginText])
  return (
    <div className="header flex justify-between mb-2 bg-amber-600 shadow-lg" >
      <div className="logo-container ">
        <img className="logo w-24" src={LOGO_URL} />
      </div>
      <div className="navItems flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4">
            Online Status : {status ? '🟢': '🔴'}
          </li>
          <li className="px-4">
            <Link to="/">
            Home
            </Link>
          </li>
          <li className="px-4">
          <Link to="/about-us">
            About Us
          </Link>
          </li>
          <li className="px-4">
          <Link to="/contact-us">
            Contact Us
          </Link>
          
          </li>

           <li className="px-4">
          <Link to="/grocery">
            Grocery
          </Link>
          
          </li>
          <li className="px-4 font-bold text-l"><Link to="/cart">Cart({cartItems.length})items</Link></li>
          <button className="login-button px-4 mx-2" onClick={loginMech}>{loginText}</button>
          <li >{loggedInUser}</li>        
        </ul>
      </div>
    </div>
  );
};
export default HeaderComponent;