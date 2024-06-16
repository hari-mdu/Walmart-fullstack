import express from "express";
import dotenv from "dotenv";
import cors from "cors"
import connectDB from "./src/config/db.js";
import userRouter from "./src/routes/user.routes.js";
import cookieParser from "cookie-parser";
import productRouter from "./src/routes/product.routes.js";
import categoryRouter from "./src/routes/category.router.js";
import orderRouter from "./src/routes/order.router.js";
import applyRouter from "./src/routes/apply.routes.js";

dotenv.config();

const app = express()

//Middlewares
app.use(express.json());

app.use(cors())

app.use(cookieParser())

//Routes
app.use("/api/user", userRouter)
app.use("/api/product", productRouter)
app.use("/api/category", categoryRouter)
app.use("/api/order",orderRouter)
app.use("/api/apply", applyRouter)

app.get("/", (req,res)=>{
    res.status(200).send("Welcome to Walmart")
})

const PORT = process.env.PORT || 8000

app.listen(PORT, ()=>{
    connectDB();
    console.log(`server is listening on port ${PORT}`)
})