import MenuCategoryDescription from "./MenuCategoryDescription";
import { useState } from "react";
const RestaurantCategory = ({ data }) => {
//   console.log(data, "Category Data");
const [arrowIcon,setArrowIcon] = useState("↓");
const [isOpen, setIsOpen] = useState(false);
    const handleClick = () => {       
        setArrowIcon(arrowIcon === "↓" ? "↑" : "↓");
        setIsOpen(!isOpen);
    }
  return (
    <div className="w-6/12 mx-auto my-4 p-4 bg-gray-50 shadow-lg">
      <div className="flex justify-between items-center" onClick={() => handleClick()}>
        <span className="text-lg font-bold">
          {data.title}({data.itemCards.length})
        </span>
        <span>{arrowIcon}</span>
      </div>
      {isOpen && <MenuCategoryDescription description={data.itemCards}/>}
      
    </div>
  );
};
export default RestaurantCategory;
