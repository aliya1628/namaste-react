import { useState,useContext } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import userContext from "../utils/userContext"; 

const Header = () => {
  const [buttonName, setButtonName] = useState("Login");
  const onlineStatus = useOnlineStatus(); // Using the custom hook
  const { loggedInUser } = useContext(userContext); 

  return (
    <div className="mx-22 flex justify-between shadow-lg p-4 m-1 rounded-lg">
      <div className="w-56">
        <Link to="/">
          <img className="w-32" src={LOGO_URL}></img>
        </Link>
      </div>
      <div className="flex items-center">
        <ul className="flex space-x-4 text-base font-bold">
          <li>Online Status: {onlineStatus ? "✅" : "❌"}</li>
          <li>
            <Link className="clean-link" to="/about">
              About Us
            </Link>
          </li>
          <li>
            <Link className="clean-link" to="/contact">
              Contact Us
            </Link>
          </li>
          <li>
            <Link className="clean-link" to="/grocery">
              Grocery Shop
            </Link>
          </li>
          <li className="text-amber-300">{loggedInUser}</li>
          <li>
            <button
              className="btn-login"
              onClick={() => {
                buttonName === "Logout"
                  ? setButtonName("Login")
                  : setButtonName("Logout");
              }}
            >
              {buttonName}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
