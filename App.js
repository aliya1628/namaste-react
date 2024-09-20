import React from "react";
import ReactDOM from "react-dom/client";

const restaurantData = [
  {
    data: {
      id: "28405",
      name: "Chinese Wok",
      cloudinaryImageId: "e0839ff574213e6f35b3899ebf1fc597",
      costForTwo: "₹250 for two",
      cuisines: ["Chinese", "Asian", "Tibetan", "Desserts"],
      avgRating: 4.2,
      deliveryTime: 27,
    },
  },
  { 
    data: {
      id: "243517",
      name: "KFC",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/17/e2270129-d210-4a35-b044-73ae307c5280_243517.JPG",
      costForTwo: "₹400 for two",
      cuisines: ["Burgers", "Fast Food", "Rolls & Wraps"],
      avgRating: 3.9,
      deliveryTime: 40,
    },
  },
];

const RestaurantCard = (props) => {
 const {restaurantObject} = props;
  return (
    <div className="restaurant-card">
      <img className="image-card" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+ restaurantObject.data.cloudinaryImageId}></img>
      <h3>{restaurantObject.data.name}</h3>
      <h4>{restaurantObject.data.cuisines.join(", ")}</h4>
      <h4>{restaurantObject.data.avgRating}</h4>
      <h4>{restaurantObject.data.deliveryTime}</h4>
    </div>
  );
};
const Footer = () => {
  return (
    <div className="footer-container">
      <h5 className="copyright-content">
        Copyright © 2024 Aliya Group, All Rights Reserved.{" "}
      </h5>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body-container">
      <div className="search">
        <input type="text" /> search
      </div>
      <div className="restaurant-container">
        <RestaurantCard
          restaurantObject = {restaurantData[0]}
        />
        <RestaurantCard
          restaurantObject = {restaurantData[1]}
        />
        
      </div>
    </div>
  );
};

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://img.freepik.com/free-vector/food-delivery-logo-with-bike-man-courier_1308-48914.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1726617600&semt=ais_hybrid"
        ></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="appLayout">
      <Header />
      <Body />
      <Footer />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
