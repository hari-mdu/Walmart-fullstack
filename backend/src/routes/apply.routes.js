import express from "express";
import { createApply, deleteApply, getAllApplies, getApply, updateApply } from "../controllers/apply.controller.js";
import { authentication } from "../middlewares/user.middleware.js";


const applyRouter = express.Router();

applyRouter.get("/details",authentication, getAllApplies);
applyRouter.get("/:id",getApply);
applyRouter.post("/:id", authentication,createApply );
applyRouter.patch("/update", updateApply);
applyRouter.delete("/:id", deleteApply);

export default applyRouter;
