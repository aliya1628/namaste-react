
import RestaurantCard from "./RestaurantCard";
import restaurantDataList from "../utils/mockData";

    
  const Body = () => {
    return (
      <div className="body-container">
        <div className="search">
          <input type="text" /> search
        </div>
        <div className="restaurant-container">
          {restaurantDataList.map((resData) => (
            <RestaurantCard key = {resData.data.id} restaurantObject={resData} />
          ))}
        </div>
      </div>
    );
  };

  export default Body;