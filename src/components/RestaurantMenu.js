import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../../utils/useRestaurantMenu";
import RestaurantCategory from "../components/RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  const { resId } = useParams(); 
  const resInfo = useRestaurantMenu(resId);
   const [showItems, setShowItems] = useState(1);

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
const categorgies = regularCards.filter( (category) => category?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");

  //console.log(itemCards, "Item Cards");
  // console.log(regularCards, "Regular Cards");
  // console.log(categorgies, "Categorgies");

  return !info ? (
    <Shimmer />
  ) : (
    <div className="text-center m-4 p-4 ">
      <h1 className="font-bold my6 text-2xl">{name}</h1>
      <p className=" font-bold text-base">
        {cuisines.join(",")} - {costForTwoMessage}
      </p>
      {/* category accordion */}
      {categorgies.map((category,index) => <RestaurantCategory key={category?.card?.card?.categoryId} data= {category?.card?.card} showItems={index === showItems  ? true : false} setShowItems={() => setShowItems(index)}/>)}      
    </div>
  );
};

export default RestaurantMenu;
