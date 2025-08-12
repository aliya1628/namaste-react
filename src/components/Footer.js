import { useContext } from "react";
import userContext from "../../utils/userContext";

const Footer = () => {
    const { loggedInUser } = useContext(userContext); 
    return (      
      <div className="mx-22 flex justify-center shadow-lg p-4 m-1 rounded-lg">
        <h5 className="text-center text-gray-500">
          Copyright © 2024-2025 {loggedInUser} Group, All Rights Reserved.
        </h5>
      </div>
    );
  };

  export default Footer;