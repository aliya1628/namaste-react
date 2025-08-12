import { useState,useContext } from "react";
import { LOGO_URL } from "../../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../../utils/useOnlineStatus";
import userContext from "../../utils/userContext"; 
import { useSelector } from "react-redux";


const Header = () => {
  const [buttonName, setButtonName] = useState("Login");
  const onlineStatus = useOnlineStatus(); // Using the custom hook
  const { loggedInUser } = useContext(userContext); 

  //# subscribing to the whole redux store 
  // const store = useSelector((store) => store);
  // const cartItem = store.cart.items;  // same as line 19 - very less performant/effient way 
  //# will give performance loss 

  const cartItems = useSelector((store) => store.cart.items); 
  //console.log("cartItems", cartItems);

  return (
    <div className="mx-22 flex justify-between shadow-lg p-4 m-1 rounded-lg">
      <div className="w-56">
        <Link to="/">
          <img className="w-32" src={LOGO_URL}></img>
        </Link>
      </div>
      <div className="flex items-center">
        <ul className="flex space-x-4 text-base font-bold">
          <li className="text-amber-300">{loggedInUser}</li>
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
          <li><Link to="/cart" className="font-bold text-base px-4">Cart ({cartItems.length}) items</Link></li>          
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
