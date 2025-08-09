import { useContext } from "react";
import userContext from "../utils/userContext";

const Footer = () => {
    const { loggedInUser } = useContext(userContext); 
    return (      
      <div className="p-16 border border-gray-100 shadow-2xl items-center w-9/12 mx-auto my-4">
        <h5 className="text-center text-gray-500">
          Copyright © 2024-2025 {loggedInUser} Group, All Rights Reserved.
        </h5>
      </div>
    );
  };

  export default Footer;