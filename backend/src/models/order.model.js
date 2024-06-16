import mongoose from "mongoose";

// Define the schema for an order
const orderSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User", // Reference to the User model
      required: true,
    },
    addressId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "UserAddress.address", // Reference to the UserAddress model's address field
      required: true,
    },
    totalAmount: {
      type: Number,
      required: true,
    },
    items: [
      {
        productId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Product", // Reference to the Product model
        },
        payablePrice: {
          type: Number,
          required: true,
        },
        purchasedQty: {
          type: Number,
          required: true,
        },
      },
    ],
    paymentStatus: {
      type: String,
      enum: ["pending", "completed", "cancelled", "refund"], // Payment status options
      required: true,
    },
    paymentType: {
      type: String,
      enum: ["cod", "card"], // Payment type options
      required: true,
    },
    orderStatus: [
      {
        type: {
          type: String,
          enum: ["ordered", "packed", "shipped", "delivered"], // Order status options
          default: "ordered",
        },
        date: {
          type: Date,
        },
        isCompleted: {
          type: Boolean,
          default: false,
        },
      },
    ],
  },
  { 
    timestamps: true, // Adds createdAt and updatedAt fields automatically
    versionKey: false // Removes the version key "__v"
  }
);

// Create a model named "Order" using orderSchema
const Order = mongoose.model("Order", orderSchema);

export default Order;
