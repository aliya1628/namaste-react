import { useState } from "react";
import { LOGO_URL } from "../utils/constants";

const Header = () => {
  const [buttonName, setButtonName] = useState("Login");
    return (
      <div className="header">
        <div className="logo-container">
          <img
            className="logo"
            src= {LOGO_URL}></img>
        </div>
        <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Cart</li>
            <li><button 
            className="btn-login" 
            onClick={() => { (buttonName === "Logout")? setButtonName("Login") : setButtonName("Logout")}}>{buttonName}</button></li>
          </ul>
        </div>
      </div>
    );
  };

  export default Header;