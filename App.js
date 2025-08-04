import ReactDOM from "react-dom/client";
import Footer from "./src/Footer";
import Header from "./src/Header";
import Body from "./src/Body";
import About from "./src/About";
import Contact from "./src/Contact";
import Error from "./src/Error";
import RestaurantMenu from "./src/RestaurantMenu";
import { createBrowserRouter, RouterProvider,Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <div className="appLayout">
      <Header />
      <Outlet />
      {/* <Footer /> */}
    </div>
  );
};

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
    path: "/restaurants/:resId",
    element: <RestaurantMenu />,
    }
  ]
  }  
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);