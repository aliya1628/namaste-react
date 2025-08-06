import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams(); 
  const resInfo = useRestaurantMenu(resId); // Using the custom hook to fetch restaurant menu data

  let name, cuisines, costForTwoMessage;

  const info = resInfo?.data?.cards?.[2]?.card?.card?.info;
  if (info) {
    name = info.name;
    cuisines = info.cuisines;
    costForTwoMessage = info.costForTwoMessage;
  }
  
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
