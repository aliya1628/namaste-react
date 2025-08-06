import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { SWIGGY_MENU_API_URL } from "./constants";

const useRestaurantMenu = (resId) => {
    const [resInfo, setResInfo] = useState({}); 

    useEffect(() => {
        fetchMenu();
    },[]);

    const fetchMenu = async () => {  
    const response = await fetch(`${SWIGGY_MENU_API_URL}${resId}`); 
    const jsonMenuData = await response.json();
    setResInfo(jsonMenuData); 
  };
    return resInfo;
}

export default useRestaurantMenu;