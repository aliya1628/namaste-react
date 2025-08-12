import { CARD_URL } from "../../utils/constants";
import { useDispatch } from "react-redux";
import { addItem } from "../../utils/cartSlice"; // Importing the action creator

const MenuCategoryDescription = ({ description }) => {
  //  console.log(description, "Description Data");
  const dispatch = useDispatch();
  const handleAddItems = (item) => {  
    dispatch(addItem(item)); // Dispatching the addItem action with the description
  }
  return (
    <>
      {description.map((item) => (
        <div
          key={item.card.info.id}
          className="flex justify-between border-b-gray-200 border-b-2 p-2 m-2 "
        >
          <div className="text-left w-9/12">
            <div className="py-2">
              <span>{item.card.info.name}</span>
              <span>-₹ {item.card.info.price ? item.card.info.price/100 : item.card.info.defaultPrice/100}</span>
            </div>
            <p className="text-xs">{item.card.info.description}</p>
          </div>
      
          <div className="w-3/12 p-4">
            <div className="relative flex justify-center items-center">
                {item.card.info.imageId ? <img src={CARD_URL + item.card.info.imageId} className="rounded-lg w-full h-auto" /> : <div className="p-4 m-4"></div>}              
              <button
                className="absolute -bottom-3 left-1/2 -translate-x-1/2 px-4 py-2 shadow-lg rounded-lg text-green-600 bg-amber-50 font-bold cursor-pointer"                
                 onClick={() => handleAddItems(item)}
              >
                ADD
              </button>
            </div>
          </div>

        </div>
      ))}
    </>
  );
};
export default MenuCategoryDescription;
