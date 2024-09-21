import React from "react";
import ReactDOM from "react-dom/client";

const restaurantDataList = [
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
  {
    data: {
      id: "32399",
      name: "McDonald's",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/9/18/2801a82b-0761-40ef-9de0-906d150b1833_32399.jpg",
      costForTwo: "₹400 for two",
      cuisines: ["Burgers", "Beverages", "Cafe", "Desserts"],
      avgRating: 4.3,
      deliveryTime: 19,
    },
  },
  {
    data: {
      id: "296658",
      name: "Big Bowl",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/22/deff0d02-ca1d-4ef9-9d62-b0cbeabf33d3_296658.JPG",
      costForTwo: "₹400 for two",
      cuisines: ["North Indian", "Chinese", "Tibetan", "Desserts"],
      avgRating: 4.2,
      deliveryTime: 19,
    },
  },
];

const RestaurantCard = (props) => {
  const { restaurantObject } = props;
  const { name, cuisines, avgRating, deliveryTime } = restaurantObject?.data; // destructuring  data
  return (
    <div className="restaurant-card">
      <img
        className="image-card"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          restaurantObject.data.cloudinaryImageId
        }
      ></img>
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} star</h4>
      <h4>{deliveryTime}</h4>
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
        {restaurantDataList.map((resData) => (
          <RestaurantCard key = {resData.data.id} restaurantObject={resData} />
        ))}
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
