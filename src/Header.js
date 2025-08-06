import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [buttonName, setButtonName] = useState("Login");
  const onlineStatus = useOnlineStatus(); // Using the custom hook
    return (
      <div className="header">
        <div className="logo-container">
          <img
            className="logo"
            src= {LOGO_URL}></img>
        </div>
        <div className="nav-items">
          <ul>
            <li>Online Status: {onlineStatus ? "✔" : "❌"}</li>
            <li><Link className="clean-link"  to="/">Home</Link></li>
            <li><Link className="clean-link"  to="/about">About Us</Link></li>
            <li><Link className="clean-link"  to="/contact">Contact Us</Link></li>
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