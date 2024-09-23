import { CARD_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    const { restaurantObject } = props;
    const { name, cuisines, avgRating, deliveryTime } = restaurantObject?.data; // destructuring  data
    return (
      <div className="restaurant-card">
        <img
          className="image-card"
          src={CARD_URL + restaurantObject.data.cloudinaryImageId}
        ></img>
        <h3>{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{avgRating} star</h4>
        <h4>{deliveryTime}</h4>
      </div>
    );
  };

  export default RestaurantCard;