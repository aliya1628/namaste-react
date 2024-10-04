import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
    
  const Body = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState([]);

    useEffect(() =>{
      fetchData();
    },[]);

    const fetchData = async () => {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0759837&lng=72.8776559&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );

      const jsonData = await data.json();
      console.log(jsonData.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
      setListOfRestaurants(jsonData.data.cards[1].card.card.gridElements.infoWithStyle.restaurants)
    };

    return (
      <div className="body-container">
        <div className="search">
          <input type="text"/>  search 
          <button className="btn-filterCards"
          onClick={() => {
            console.log(listOfRestaurants);
            const filteredList = listOfRestaurants.filter((res) => res.info.avgRating > 4 );
            console.log(filteredList);
            setListOfRestaurants(filteredList);
          }}
          >Top Rated Restaurants</button>
        </div>
        <div className="restaurant-container">
          {listOfRestaurants.map((resData) => (
            <RestaurantCard key = {resData.info.id} restaurantObject={resData} />
          ))}
        </div>
      </div>
    );
  };

  export default Body;