import React from "react";
import ReactDOM from "react-dom/client";
import Footer from "./src/Footer";
import Header from "./src/Header";
import Body from "./src/Body";

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
