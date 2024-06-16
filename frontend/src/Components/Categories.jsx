import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { baseApi } from "../api/axiosInstance";

// Categories component
const Categories = () => {
  // State for categories
  const [categories, setCategories] = useState([]);

  // Fetch categories from the API on component mount
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await baseApi.get('category/details');
        const data = response.data; // Axios responses have data in the data property
        setCategories(data);
        console.log(data);
      } catch (error) {
        console.error("Error fetching categories:", error.message);
      }
    };

    fetchCategories();
  }, []);

  // JSX for rendering categories
  return (
    <>
      <div>
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto">
            <h2 className=" text-3xl font-bold text-black pb-5">Categories</h2>
            <div className="flex flex-wrap -m-4">
              {/* Mapping through categories and rendering each category */}
              {categories.map((category) => (
                <div className="lg:w-1/5 md:w-1/2 p-4 w-full" key={category._id}>
                  <Link to={`/products?categoryId=${category._id}`}>
                    {/* Link to category products page */}
                    <div
                      className="block relative h-48 rounded overflow-hidden"
                    >
                      {/* Category image */}
                      <img
                        alt="ecommerce"
                        className="object-cover object-center w-full h-full block"
                        src={category.categoryImage}
                      />
                    </div>
                    <div className="mt-4">
                      {/* Category name */}
                      <button
                        className="text-gray-500 text-xs tracking-widest title-font mb-1"
                      >
                        {category.name}
                      </button>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Categories;
