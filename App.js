import ReactDOM from "react-dom/client";
import Footer from "./src/components/Footer";
import Header from "./src/components/Header";
import Body from "./src/components/Body";
import Contact from "./src/components/Contact";
import Error from "./src/components/Error";
import Cart from "./src/components/Cart";
import RestaurantMenu from "./src/components/RestaurantMenu";
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

const Grocery = lazy(() => import("./src/components/Grocery")); // Lazy loading Grocery component
const About = lazy(() => import("./src/components/About")); 

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