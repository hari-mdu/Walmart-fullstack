import express from "express";
import {
    createOrder,
    deleteOrder,
    getAllOrders,
    getOrder,
    updateOrder,
} from "../controllers/order.controller.js";

const orderRouter = express.Router();

// Route to get all orders
orderRouter.get("/details", getAllOrders);

// Route to get a specific order by ID
orderRouter.get("/:id", getOrder);

// Route to create a new order
orderRouter.post("/create", createOrder);

// Route to update an order by ID
orderRouter.patch("/:id", updateOrder);

// Route to delete an order by ID
orderRouter.delete("/:id", deleteOrder);

export default orderRouter;
