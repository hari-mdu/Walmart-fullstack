import mongoose from "mongoose";

// Define the schema for a category
const categorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    type: {
      type: String,
    },
    categoryImage: { 
      type: String 
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User", // Reference to the User model (optional, can be null)
      required: false,
    },
  },
  { 
    timestamps: true, // Adds createdAt and updatedAt fields automatically
    versionKey: false // Removes the version key "__v"
  }
);

// Create a model named "Category" using categorySchema
const Category = mongoose.model("Category", categorySchema);

export default Category;
