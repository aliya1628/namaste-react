import ReactDOM from "react-dom/client";
import Footer from "./src/Footer";
import Header from "./src/Header";
import Body from "./src/Body";
import About from "./src/About";
import Contact from "./src/Contact";
import Error from "./src/Error";
import RestaurantMenu from "./src/RestaurantMenu";
import { createBrowserRouter, RouterProvider,Outlet } from "react-router-dom";
import { lazy, Suspense } from "react";

const AppLayout = () => {
  return (
    <div className="appLayout">
      <Header />
      <Outlet />
      {/* <Footer /> */}
    </div>
  );
};

const Grocery = lazy(() => import("./src/Grocery")); // Lazy loading Grocery component

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
    element: <About />,
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
    }
  ]
  }  
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);