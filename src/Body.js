import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus"; // Importing the custom hook

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]); //changed only once when the component is mounted
  const [filteredRestautants, setfilteredRestautants] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    console.log(listOfRestaurants, "List of Restaurants");
  }, [listOfRestaurants]);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0759837&lng=72.8776559&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const jsonData = await data.json();
    setListOfRestaurants(
      jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    ); // Optional Chaining

    setfilteredRestautants(
      jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };
  const onlineStatus = useOnlineStatus(); // Using the custom hook

  if (onlineStatus === false) {
    return (
      <h1 className="offline-message">
        "You are offline! Please check your internet connection."
      </h1>
    );
  }

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body-container">
      <div className="search">
        <input
          type="text"
          className="search-text"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />{" "}
        <button
          onClick={() => {
            console.log(searchText);
            const filterItems = listOfRestaurants.filter((res) => {
              return res.info.name
                .toLowerCase()
                .includes(searchText.toLowerCase()); // return not used in the tutorial but required in our case else it will return undefined
            });
            console.log(filterItems, "Filtered");
            setfilteredRestautants(filterItems);
          }}
        >
          Search
        </button>
        <button
          className="btn-filterCards"
          onClick={() => {
            console.log(listOfRestaurants);
            const filteredList = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4.5
            );
            console.log(filteredList);
            setListOfRestaurants(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="restaurant-container">
        {filteredRestautants.map((resData) => (
          //to={`/restaurant/${resId}`
          <Link
            className="clean-link"
            key={resData.info.id}
            to={"/restaurants/" + resData.info.id}
          >
            <RestaurantCard restaurantObject={resData} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
