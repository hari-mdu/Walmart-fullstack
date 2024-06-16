import React from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../state/actions";

// CardItemCard component
const CardItemCard = ({ id, title, price, image, quantity }) => {
  const cartItem = { id, title, price, image, quantity };
  const product = { id, title, price, image };
  console.log(product);
  const dispatch = useDispatch();

  // Function to format title if it's too long
  const formatTitle = (title) => {
    return title.length <= 14 ? title : title.substr(0, 14) + "...";
  };

  // Function to calculate total price for each item
  const sumPrice = () => {
    return (cartItem.price * cartItem.quantity).toFixed(2);
  };

  // JSX for rendering card item
  return (
    <>
      <tr>
        <td className="px-6 py-4 whitespace-no-wrap">
          <img
            src={image}
            alt="Product"
            className="w-16 h-16 object-cover rounded"
          />
        </td>
        <td className="px-6 py-4 whitespace-no-wrap">{title}</td>
        <td className="px-6 py-4 whitespace-no-wrap">{price}</td>
        <td className="px-6 py-4 whitespace-no-wrap">
          <div className="flex items-center gap-4">
            {/* Button to decrease quantity */}
            <button
              className="flex items-center justify-center p-2 font-bold w-full bg-gray-200 text-black hover:bg-black hover:text-white"
              onClick={() => dispatch(removeFromCart(product))}
            >
              <FaMinus />
            </button>
            <div>{cartItem.quantity}</div>
            {/* Button to increase quantity */}
            <button
              className="flex items-center justify-center p-2 font-bold w-full bg-gray-200 text-black hover:bg-black hover:text-white"
              onClick={() => dispatch(addToCart(product))}
            >
              <FaPlus />
            </button>
          </div>
        </td>
        <td className="px-6 py-4 whitespace-no-wrap">{sumPrice()}</td>
      </tr>
    </>
  );
};

export default CardItemCard;
