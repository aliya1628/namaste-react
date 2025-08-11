import RestaurantCard, {withPromotedLabel} from "./RestaurantCard";
import { useEffect, useState, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import userContext from "../utils/userContext";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]); //changed only once when the component is mounted
  const [filteredRestaurants, setfilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [enabled, setEnabled] = useState(false); // suppose this as promoted value coming from api
  const PromotedRestaurantCard = withPromotedLabel(RestaurantCard);
  const { loggedInUser , setUserName} = useContext(userContext); // Using context to get logged in user

  useEffect(() => {
    fetchData();
  }, []);

  // useEffect(() => {
  //   console.log(listOfRestaurants, "List of Restaurants");
  // }, [listOfRestaurants]);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0759837&lng=72.8776559&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const jsonData = await data.json();
    setListOfRestaurants(
      jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    ); // Optional Chaining

    setfilteredRestaurants(
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
      <div className="mx-22 flex justify-between items-center">
        <div className="m-2 p-2 flex">
          <div className="p-0.5">
            <input
              type="text"
              className="border border-solid border-black rounded-lg p-1 m-1 hover:bg-gray-100"
              value={searchText}
              onChange={(e) => {
                setSearchText(e.target.value);
              }}
            />
            <button
              className="px-4 py-2 bg-green-200 rounded-lg"
              onClick={() => {
                console.log(searchText);
                const filterItems = listOfRestaurants.filter((res) => {
                  return res.info.name
                    .toLowerCase()
                    .includes(searchText.toLowerCase());
                });
                console.log(filterItems, "Filtered");
                setfilteredRestaurants(filterItems);
              }}
            >
              Search
            </button>
          </div>
          <div className="p-0.5">
            <input
              type="text"
              className="border border-solid border-black rounded-lg p-1 m-1 hover:bg-gray-100"
              value={loggedInUser}
              onChange={(e) => setUserName(e.target.value)}
            />
            </div>
          <div className="p-4 justify-center">
            <button
              type="button"
              className={`relative inline-flex h-6 w-12 items-center rounded-full transition-colors focus:outline-none ${
                enabled ? "bg-blue-600" : "bg-gray-300"
              }`}
              onClick={() => setEnabled(!enabled)}
            >
              <span
                className={`inline-block h-5 w-5 transform rounded-full bg-white transition-transform ${
                  enabled ? "translate-x-6" : "translate-x-1"
                }`}
              />
            </button>
          </div>
        </div>
        <div>
          <button
            className="px-4 py-2 m-2 bg-green-200 rounded-lg"
            onClick={() => {
              console.log(listOfRestaurants);
              const filteredList = listOfRestaurants.filter(
                (res) => res.info.avgRating < 4.5
              );
              console.log(filteredList);
              setfilteredRestaurants(filteredList);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
      </div>

      <div className="flex flex-wrap justify-center">
        {filteredRestaurants.map((resData) => (
          //to={`/restaurant/${resId}`
          <Link
            className="clean-link"
            key={resData.info.id}
            to={"/restaurants/" + resData.info.id}
          >
            {enabled ? <PromotedRestaurantCard restaurantObject={resData} /> :
            <RestaurantCard resData={resData?.info} />}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
