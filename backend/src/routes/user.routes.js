import express from "express";
import { deleteUser, login, logout, register } from "../controllers/user.controller.js";
import { authentication } from "../middlewares/user.middleware.js";

const userRouter = express.Router();

// Route to register a new user
userRouter.post("/register", register);

// Route to login a user
userRouter.post("/login", login);

// Route to logout a user
userRouter.post("/logout", logout);

// Route to delete a user by ID
userRouter.delete("/:id", authentication, deleteUser);

export default userRouter;
