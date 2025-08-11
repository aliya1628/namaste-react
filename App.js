import ReactDOM from "react-dom/client";
import Footer from "./src/Footer";
import Header from "./src/Header";
import Body from "./src/Body";
import Contact from "./src/Contact";
import Error from "./src/Error";
import Cart from "./src/Cart";
import RestaurantMenu from "./src/RestaurantMenu";
import { createBrowserRouter, RouterProvider,Outlet } from "react-router-dom";
import { lazy, Suspense, useEffect, useState } from "react";
import userContext from "./utils/userContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore"; // Importing the Redux store

const AppLayout = () => {
const [userName , setUserName] = useState();

useEffect(() => {
  // Simulating an API call to fetch user data
  const user = {
    name: "Aliya"
  }
  setUserName(user.name);
},[]);

  return (
    <Provider store={appStore}> 
    <userContext.Provider value={{ loggedInUser: userName,setUserName  }}> 
    <div className="appLayout">
      {/* <userContext.Provider value={{ loggedInUser="Ally" }}> */}
        <Header />
      {/* </userContext.Provider>       */}
      <Outlet />
      <Footer />
    </div>
    </userContext.Provider>
    </Provider>
  );
};

const Grocery = lazy(() => import("./src/Grocery")); // Lazy loading Grocery component
const About = lazy(() => import("./src/About")); 

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children :[
    {
    path: "/",
    element: <Body />,
    },     
    {
    path: "/about",
    element:<Suspense fallback={<h1>Loading...</h1>}><About /></Suspense>,
    },
    {
    path: "/contact",
    element: <Contact />,
    },
    {
    path: "/grocery",
    element: <Suspense fallback={<h1>Loading...</h1>}> <Grocery /> </Suspense>,
    },
    {
    path: "/restaurants/:resId",
    element: <RestaurantMenu />,
    },
    {
      path: "/cart",
      element: <Cart />
    }
  ]}  
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);