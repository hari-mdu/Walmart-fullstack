import express from "express";
import {
  createProduct,
  deleteProduct,
  getAllProducts,
  getProduct,
  updateProduct,
} from "../controllers/product.controller.js";
import { authentication } from "../middlewares/user.middleware.js";

const productRouter = express.Router();

// Route to get all products
productRouter.get("/details", getAllProducts);

// Route to get a specific product by ID
productRouter.get("/:id", getProduct);

// Route to create a new product
productRouter.post("/create", authentication, createProduct);

// Route to update a product by ID
productRouter.patch("/:id", updateProduct);

// Route to delete a product by ID
productRouter.delete("/:id", deleteProduct);

export default productRouter;
