import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
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
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="navItems">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
          <button className="login-button" onClick={loginMech}>{loginText}</button>
        </ul>
      </div>
    </div>
  );
};
export default HeaderComponent;