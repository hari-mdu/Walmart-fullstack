import Category from "../models/category.model.js";
import Products from "../models/product.model.js";

// Handler to get all categories
const getAllCategories = async (req, res) => {
  try {
    // Fetch all categories from the database
    const categories = await Category.find({});
    
    // Return the categories with a 200 OK status
    return res.status(200).send(categories);
  } catch (error) {
    // Return an error response if an exception occurs
    return res.status(500).send({ message: "Error in getting categories", error: error.message });
  }
};

// Handler to get products by category ID
const getCategory = async (req, res) => {
  const categoryId = req.query.categoryId; // Extract category ID from query parameter

  try {
    // Fetch products from the database filtered by category ID
    const products = await Products.find({ 'category._id': categoryId });

    // Respond with JSON array of products
    res.json(products);
  } catch (err) {
    // Return an error response if an exception occurs
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};

// Handler to create a new category
const createCategory = async (req, res) => {
  try {
    // Create a new category with data from the request body
    const category = await Category.create(req.body);
    
    // Return a success response with a 201 Created status
    return res.status(201).send({ message: "Category created" });
  } catch (error) {
    // Return an error response if an exception occurs
    return res.status(500).send({ message: "Error in creating category", error: error.message });
  }
};

// Handler to update an existing category by its ID
const updateCategory = async (req, res) => {
  const { id } = req.params;
  try {
    // Find the category by its ID and update it with the new data
    const category = await Category.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    
    // Return a success response with a 200 OK status
    return res.status(200).send({ message: "Category updated Successfully" });
  } catch (error) {
    // Return an error response if an exception occurs
    return res.status(500).send({ message: "Error in updating category", error: error.message });
  }
};

// Handler to delete an existing category by its ID
const deleteCategory = async (req, res) => {
  const { id } = req.params;
  try {
    // Find the category by its ID and delete it
    const category = await Category.findByIdAndDelete(id);
    
    // Return a success response with a 200 OK status
    return res.status(200).send({ message: "Category deleted Successfully" });
  } catch (error) {
    // Return an error response if an exception occurs
    return res.status(500).send({ message: "Error in deleting category", error: error.message });
  }
};

// Export the handler functions for use in other parts of the application
export {
  getAllCategories,
  getCategory,
  createCategory,
  updateCategory,
  deleteCategory,
};
