import React from "react";
import ReactDOM from "react-dom/client";

const RestaurantCard = (props) => {
  const {restaurantName,imgSrc,cuisine,rating,deliveryTime} = props;
  return(
    <div className="restaurant-card">    
    <img className="image-card" 
    src={imgSrc}>
    </img>
    <h3>{restaurantName}</h3>
    <h4>{cuisine}</h4>
    <h4>{rating}</h4>
    <h4>{deliveryTime}</h4>
    </div>
  )
};
const Footer = () =>{
  return (
    <div className="footer-container">
      <h5 className="copyright-content">Copyright © 2024 Aliya Group, All Rights Reserved. </h5>
    </div>
  )
};

const Body = () =>{
  return(
    <div className="body-container">
     <div className="search">
      <input type="text"/> search 
     </div>
     <div className="restaurant-container">
        <RestaurantCard 
        restaurantName="Seoul House" 
        imgSrc="https://cdni.iconscout.com/illustration/premium/thumb/korean-meal-bowl-illustration-download-in-svg-png-gif-file-formats--delicious-logo-food-asian-pack-drink-illustrations-5662109.png" 
        cuisine="Korean Food" 
        rating="4.0 stars" 
        deliveryTime="20 minutes"/>
        <RestaurantCard 
        restaurantName="Chinese Wok" 
        imgSrc="https://promova.com/content/large_chinese_food_vocabulary_a171de5849.png" 
        cuisine="Chinese" 
        rating="4.0 stars" 
        deliveryTime="30 minutes"/>
        <RestaurantCard 
        restaurantName="Thai Cruiser" 
        imgSrc="https://promova.com/content/large_chinese_food_vocabulary_a171de5849.png" 
        cuisine="Thai" 
        rating="3.0 stars" 
        deliveryTime="25 minutes"/>
        <RestaurantCard 
        restaurantName="Pubjabi Tadka" 
        imgSrc="https://us.123rf.com/450wm/seamartini/seamartini1904/seamartini190400133/121246396-italian-cuisine-dishes-of-pasta-meat-and-vegetable-food.jpg?ver=6" 
        cuisine="Punjabi" 
        rating="4.4 stars" 
        deliveryTime="45 minutes"/>
        <RestaurantCard 
        restaurantName="SouthIndian Aroma" 
        imgSrc="https://icon2.cleanpng.com/lnd/20240517/exa/awrh9uoo0.webp" 
        cuisine="South Indian" 
        rating="4.5" 
        deliveryTime="20 minutes"/>
        <RestaurantCard 
        restaurantName="Italian Feast" 
        imgSrc="https://us.123rf.com/450wm/seamartini/seamartini1904/seamartini190400133/121246396-italian-cuisine-dishes-of-pasta-meat-and-vegetable-food.jpg?ver=6" 
        cuisine="Italian" 
        rating="3.5 stars" 
        deliveryTime="35 minutes"/>
        <RestaurantCard 
        restaurantName="KFC" 
        imgSrc="https://img.freepik.com/free-vector/vector-cartoon-illustration-traditional-set-fast-food-meal_1441-331.jpg" 
        cuisine="Fast Food" 
        rating="5 stars" 
        deliveryTime="15 minutes"/>
     </div>
    </div>
  )
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
 )
};

const AppLayout = () => {
  return (
    <div className="appLayout">
      <Header/>
      <Body/>
      <Footer/>
    </div>
  )
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);