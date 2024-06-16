import Category from "../models/category.model.js";
import Products from "../models/product.model.js";

const getAllCategories = async (req, res) => {
  try {
    const categories = await Category.find({});
    return res.status(200).send(categories);
  } catch (error) {
    return res
      .status(500)
      .send({ message: "Error in getting categories", error: error.message });
  }
};

const getCategory = async (req, res) => {
  const categoryId = req.query.categoryId; // Extract category ID from query parameter

  try {
    // Fetch products from database filtered by category ID
    const products = await Products.find({ 'category._id': categoryId });

    res.json(products); // Respond with JSON array of products
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};

const createCategory = async (req, res) => {
  try {
    const category = await Category.create(req.body);
    return res.status(201).send({ message: "Category created" });
  } catch (error) {
    return res
      .status(500)
      .send({ message: "Error in creating category", error: error.message });
  }
};

const updateCategory = async (req, res) => {
  const { id } = req.params;
  try {
    const category = await Category.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    return res.status(200).send({ message: "Category updated Successfully" });
  } catch (error) {
    return res
      .status(500)
      .send({ message: "Error in updating category", error: error.message });
  }
};

const deleteCategory = async (req, res) => {
  const { id } = req.params;
  try {
    const category = await Category.findByIdAndDelete(id);
    return res.status(200).send({ message: "Category deleted Successfully" });
  } catch (error) {
    return res
      .status(500)
      .send({ message: "Error in deleting category", error: error.message });
  }
};

export {
  getAllCategories,
  getCategory,
  createCategory,
  updateCategory,
  deleteCategory,
};
