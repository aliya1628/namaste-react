import React from "react";
import ReactDOM from "react-dom/client";

const RestaurantCard = () => {
  return(
    <div className="restaurant-card">    
    <img className="image-card" 
    src="https://cdni.iconscout.com/illustration/premium/thumb/korean-meal-bowl-illustration-download-in-svg-png-gif-file-formats--delicious-logo-food-asian-pack-drink-illustrations-5662109.png">
    </img>
    <h3>Seoul House</h3>
    <h4>Korean, Chinese & Japanese</h4>
    <h4>4.4 stars</h4>
    <h4>30 minutes</h4>
    </div>
  )
};
const Footer = () =>{
  return (
    <div className="footer-container">
      <h5>Copyright © 1998-2024 Nielsen Norman Group, All Rights Reserved. </h5>
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
        <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/>
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