import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { setProducts } from '../state/actions/products';
import { baseApi } from "../api/axiosInstance";

// Products component
const Products = () => {
  // Selecting products state from Redux store
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();

  // Fetching products from API on component mount
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await baseApi.get('/product/details');
        const data = response.data; // Axios responses have data in the data property
        console.log(data);
        // Dispatching action to set products in Redux store
        dispatch(setProducts(data));
      } catch (error) {
        console.error("Error fetching products:", error.message);
      }
    };
    fetchProducts();
  }, [dispatch]);
  // JSX for rendering products


  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-10 mx-auto">
          <h2 className="text-3xl font-bold text-black pb-5">All Products</h2>
          <div className="flex flex-wrap -m-4">
            {/* Mapping through products and rendering each product */}
            {products.map((product) => (
              <div className="lg:w-1/4 md:w-1/2 p-4 w-full" key={product._id}>
                <Link to={`/product/${product._id}`}>
                  {/* Product image */}
                  <div className="block relative h-48 rounded overflow-hidden">
                    <img
                      alt="ecommerce"
                      className="object-cover object-center w-full h-full block"
                      src={product.image}
                    />
                  </div>
                  <div className="mt-4">
                    {/* Product category */}
                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                      {product.name}
                    </h3>
                    {/* Product title */}
                    <h2 className="text-gray-900 title-font text-lg font-medium">
                      {product.title}
                    </h2>
                    {/* Product price */}
                    <p className="mt-1">${product.price}</p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Products;
