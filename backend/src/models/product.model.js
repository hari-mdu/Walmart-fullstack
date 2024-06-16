import mongoose from "mongoose";

// Define the schema for a product
const productSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    productDescription: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category", // Reference to the Category model
    },
    quantity: {
      type: Number,
      required: true,
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User", // Reference to the User who created the product
      required: true,
    },
    rating: {
      type: Number,
      required: true,
    },
    reviews: [
      {
        userId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User", // Reference to the User who posted the review
        },
        review: String,
      },
    ],
  },
  {
    versionKey: false, // Removes the version key "__v"
    timestamps: true, // Adds createdAt and updatedAt fields automatically
  }
);

// Create a model named "Product" using productSchema
const Product = mongoose.model("Product", productSchema);

export default Product;
