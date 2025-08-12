import { CARD_URL } from "../../utils/constants";

const RestaurantCard = (props) => {
    const { resData } = props;
    const { name, cuisines, avgRating, costForTwo,sla,cloudinaryImageId } = resData; // destructuring  data

    //console.log(resData, "resData");
    
    return (
      <div className="m-4 p-4 w-[250px] shadow-lg bg-gray-100 rounded-lg hover:bg-gray-300" data-testid= "resCardList">
        <img
          className="w-52 h-52 rounded-lg"
          src={CARD_URL + cloudinaryImageId}
        ></img>
        <h3>{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{avgRating} star</h4>
        <h4>{costForTwo}</h4>
        <h4>Delivery time : {sla.deliveryTime} minutes</h4>
      </div>
    );
  };

  export const withPromotedLabel = () => {
    return (props) => {
      return (
        <div>
          <span className="absolute bg-black text-white mx-2 px-2 rounded-lg">Promoted</span>
          <RestaurantCard {...props} />          
        </div>
      );
    }
  };


  export default RestaurantCard;