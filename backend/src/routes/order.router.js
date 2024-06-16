import express from "express";
import {
    createOrder,
    deleteOrder,
    getAllOrders,
    getOrder,
    updateOrder,
} from "../controllers/order.controller.js";

const orderRouter = express.Router();

orderRouter.get("/details", getAllOrders);
orderRouter.get("/:id", getOrder);
orderRouter.post("/create", createOrder);
orderRouter.patch("/:id", updateOrder);
orderRouter.delete("/:id", deleteOrder);

export default orderRouter;
