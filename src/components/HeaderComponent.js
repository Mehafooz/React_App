import { useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
const HeaderComponent = () => {
  const [loginText,setLoginText]=useState('Login');
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

  useEffect(()=>{
    console.log("react head use effect")
  },[loginText])
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="navItems">
        <ul>
          <li>
            Online Status : {status ? '🟢': '🔴'}
          </li>
          <li>
            <Link to="/">
            Home
            </Link>
          </li>
          <li>
          <Link to="/about-us">
            About Us
          </Link>
          </li>
          <li>
          <Link to="/contact-us">
            Contact Us
          </Link>
          
          </li>

           <li>
          <Link to="/grocery">
            Grocery
          </Link>
          
          </li>
          <li>Cart</li>
          <button className="login-button" onClick={loginMech}>{loginText}</button>
        </ul>
      </div>
    </div>
  );
};
export default HeaderComponent;