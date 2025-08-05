import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { SWIGGY_MENU_API_URL } from "../utils/constants";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState({}); // Initialize with null to handle loading state
  const { resId } = useParams(); // Get the restaurant ID from the URL parameters

  useEffect(() => {
    fetchMenu();
  }, []);

  // useEffect(() => {
  //   if (resInfo) {
  //     console.log(resInfo, "Updated Restaurant_Info");
  //   }
  // }, [resInfo]);

  const fetchMenu = async () => {
    console.log(resId, "Restaurant ID");
    const response = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.07480&lng=72.88560&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`
    );
    //const response = await fetch(`${SWIGGY_MENU_API_URL}${resId}`); // Use the constant for the API URL
    const jsonMenuData = await response.json();
    setResInfo(jsonMenuData); // this schedules the update
  };

  // const { name, cuisines, costForTwoMessage } = resInfo?.data?.cards[2]?.card?.card?.info;  //from the tutorial but optional chaining is not safe here instead used fallback to avoid errors

  let name, cuisines, costForTwoMessage;

  const info = resInfo?.data?.cards?.[2]?.card?.card?.info;
  if (info) {
    name = info.name;
    cuisines = info.cuisines;
    costForTwoMessage = info.costForTwoMessage;
  }
  
//To handle this dynamically, you should search for the first card in
// resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards
// that contains an itemCards array, instead of hardcoding the index [1] or [2]

const regularCards = resInfo?.data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];
const menuCard = regularCards.find(
  (card) => card?.card?.card?.itemCards && Array.isArray(card.card.card.itemCards)
);
const itemCards = menuCard?.card?.card?.itemCards || [];

  console.log(itemCards, "Item Cards");

  return !info ? (
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
        <li key={item.card.info.id}>
          {item.card.info.name} - {"Rs. "}
          {item.card.info.defaultPrice || item.card.info.price || "N/A"}
        </li>
      ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
