import RestaurantCard from "./RestaurantCard";
import restaurantDataList from "../utils/mockData";
import { useState } from "react";

    
  const Body = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState(restaurantDataList);
    return (
      <div className="body-container">
        <div className="search">
          <input type="text"/>  search 
          <button className="btn-filterCards"
          onClick={() => {
            console.log(listOfRestaurants);
            const filteredList = listOfRestaurants.filter((res) => res.data.avgRating > 4 );
            console.log(filteredList);
            setListOfRestaurants(filteredList);
          }}
          >Top Rated Restaurants</button>
        </div>
        <div className="restaurant-container">
          {listOfRestaurants.map((resData) => (
            <RestaurantCard key = {resData.data.id} restaurantObject={resData} />
          ))}
        </div>
      </div>
    );
  };

  export default Body;