import mongoose from "mongoose";

// Define the schema for a cart item
const cartSchema = new mongoose.Schema(
  {
    user: { 
      type: mongoose.Schema.Types.ObjectId, 
      ref: "User", // Reference to the User model
      required: true 
    },
    cartItems: [
      {
        product: { 
          type: mongoose.Schema.Types.ObjectId, 
          ref: "Product", // Reference to the Product model
          required: true 
        },
        quantity: { 
          type: Number, 
          default: 1 
        },
        // price: { type: Number, required: true },
      },
    ],
  },
  { 
    timestamps: true, // Adds createdAt and updatedAt fields automatically
    versionKey: false // Removes the version key "__v"
  }
);

// Create a model named "Cart" using cartSchema
const Cart = mongoose.model("Cart", cartSchema);

export default Cart;
