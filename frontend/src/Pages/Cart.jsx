import React from "react";
import { useSelector } from "react-redux";
import CardItemCard from "../Components/CardItemCard";

// Cart component
const Cart = () => {
  // Selecting cart state from Redux store
  const cart = useSelector((state) => state.cart);

  // Function to calculate the total sum of all items in the cart
  const sumTotal = () => {
    return cart
      .reduce(
        (total, cartItem) => total + cartItem.price * cartItem.quantity,
        0
      )
      .toFixed(2);
  };

  // Generating JSX for each cart item using the CardItemCard component
  const cartItems = cart.map((cartItem) => (
    <CardItemCard
      key={Math.random()} // Using Math.random() as key, might not be optimal
      id={cartItem._id}
      title={cartItem.title}
      price={cartItem.price}
      image={cartItem.image}
      quantity={cartItem.quantity}
    />
  ));

  // JSX for rendering the cart
  return (
    <>
      <div className=" ">
        {/* Header indicating the shopping cart */}
        <div className="font-bold mb-6 text-xl">Your shopping cart</div>
        {/* Container for cart items */}
        <div className="flex flex-col gap-8 w-full overflow-auto">
          <table className="">
            <thead>
              <tr>
                {/* Table headers */}
                <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                  Image
                </th>
                <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                  Name
                </th>
                <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                  Price
                </th>
                <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                  Quantity
                </th>
                <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                  Subtotal
                </th>
              </tr>
            </thead>
            {/* Table body containing cart items */}
            <tbody>{cartItems}</tbody>
          </table>
        </div>
        {/* Displaying total price of all items in the cart */}
        <h2 className="font-bold text-center text-2xl">Total: ${sumTotal()}</h2>
        {/* Button for checkout */}
        <div className="flex justify-center my-8">
          <button className="p-4 font-bold w-fit rounded-full bg-[#46FFD3] hover:bg-[#35eec2]">
            Checkout
          </button>
        </div>
      </div>
    </>
  );
};

export default Cart;
