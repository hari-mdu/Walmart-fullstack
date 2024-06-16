import express from "express";
import { createApply, deleteApply, getAllApplies, getApply, updateApply } from "../controllers/apply.controller.js";
import { authentication } from "../middlewares/user.middleware.js";

const applyRouter = express.Router();

// Route to get all applies for the authenticated user
applyRouter.get("/details", authentication, getAllApplies);

// Route to get a specific apply by ID
applyRouter.get("/:id", getApply);

// Route to create an apply for a specific product ID (authenticated route)
applyRouter.post("/:id", authentication, createApply);

// Route to update an apply by ID
applyRouter.patch("/update", updateApply);

// Route to delete an apply by ID
applyRouter.delete("/:id", deleteApply);

export default applyRouter;
