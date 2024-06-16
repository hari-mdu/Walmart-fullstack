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

productRouter.get("/details", getAllProducts);
productRouter.get("/:id", getProduct);
productRouter.post("/create",authentication, createProduct);
productRouter.get("/:id", updateProduct);
productRouter.get("/:id", deleteProduct);

export default productRouter;
