import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { baseApi } from "../api/axiosInstance";

const ProductsByCategory = () => {
  // State to hold the list of products in the category
  const [products, setProducts] = useState([]);

  // Extract the category ID from the URL parameters
  const { id } = useParams();
  console.log(id, "id");

  // Fetch products by category when the component mounts or when categoryId changes
  useEffect(() => {
    const fetchProductsByCategory = async () => {
      try {
        // Make GET request to fetch products by category ID
        const response = await axios.get(`/products?categoryId=${categoryId}`);
        setProducts(response.data); // Update state with fetched products
      } catch (error) {
        console.error("Error fetching products:", error.message);
      }
    };

    fetchProductsByCategory();
  }, [categoryId]);

  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            {/* Iterate over the products and display each one */}
            {products.map((product) => (
              <div className="lg:w-1/4 md:w-1/2 p-4 w-full" key={product._id}>
                {/* Link to the individual product page */}
                <Link to={`/product/${product._id}`}>
                  <div className="block relative h-48 rounded overflow-hidden">
                    <img
                      alt="ecommerce"
                      className="object-cover object-center w-full h-full block"
                      src={product.category.image}
                    />
                  </div>
                  <div className="mt-4">
                    {/* Display product category name */}
                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                      {product.category.name}
                    </h3>
                    {/* Display product title */}
                    <h2 className="text-gray-900 title-font text-lg font-medium">
                      {product.title}
                    </h2>
                    {/* Display product price */}
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

export default ProductsByCategory;
