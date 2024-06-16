import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from "../state/actions";
import { baseApi } from "../api/axiosInstance";

const ProductPage = () => {
  // Extract the product ID from the URL parameters
  const { id } = useParams();
  console.log(id, "id");

  // State to hold the product data
  const [product, setProduct] = useState({});

  // Redux dispatch function to send actions
  const dispatch = useDispatch();

  // Fetch the product data when the component mounts or when the ID changes
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        // Fetch product data from the API
        const response = await baseApi.get(`/product/${id}`);

        const data = response.data; // Axios responses have data in the data property
        console.log(data);
        // Update the state with the fetched product data
        setProduct(data);
      } catch (error) {
        console.error("Error fetching product data:", error);
      }
    };

    if (id) { // Ensure `id` is defined before making the API call
      fetchProduct();
    }
  }, [id])
  
  return (
    <>
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            {/* Display product image */}
            <img
              alt="ecommerce"
              className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
              src={product.image}
            />
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              {/* Display product category */}
              <h2 className="text-sm title-font text-gray-500 tracking-widest">
                {product?.category?.name}
              </h2>
              {/* Display product title */}
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                {product.title}
              </h1>
              <div className="flex mb-4">
                {/* Ratings SVG code here */}
              </div>
              {/* Display product description */}
              <p className="leading-relaxed">{product.productDescription}</p>
              <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
                {/* Color selection and Size selection code here */}
              </div>
              <div className="flex">
                {/* Display product price */}
                <span className="title-font font-medium text-2xl text-gray-900">
                  ${product.price}
                </span>
                {/* Add to cart button with onClick handler to dispatch addToCart action */}
                <button className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded" 
                 onClick={() => dispatch(addToCart(product))}>
                  Add to cart
                </button>
                {/* Heart icon button (wishlist functionality can be added here) */}
                <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                  {/* Heart SVG code here */}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Display message if product is not found */}
      {!Object.keys(product).length > 0 && <div>Product not found</div>}
    </>
  );
};

export default ProductPage;
