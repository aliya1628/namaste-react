import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { SWIGGY_MENU_API_URL } from "../utils/constants";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const {resId} = useParams(); // Get the restaurant ID from the URL parameters
 
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const menuData = await fetch(SWIGGY_MENU_API_URL+resId); // Fetch the menu data using the restaurant ID from the URL
    const jsonMenuData = await menuData.json();
    console.log(jsonMenuData?.data?.cards[2].card.card?.info);
    setResInfo(jsonMenuData?.data);
  };
  const {
    name,
    cuisines,
    avgRating,
    costForTwoMessage,
    sla,
    cloudinaryImageId,
  } = resInfo?.cards[2].card.card?.info || {};
  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
      ?.card || {};
  console.log(itemCards);

  return resInfo === null ? (
    <Shimmer />
  ) : (
    <div className="restaurant-menu">
      <h1>{name}</h1>
      <p>
        {cuisines.join(",")} - {costForTwoMessage}
      </p>
      <h2>Menu</h2>
      <ul>
        {itemCards.map((item) => (
          <li key={item.card.info.id}>{item.card.info.name} - {"Rs. "}{item.card.info.defaultPrice}</li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
