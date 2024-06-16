import mongoose from "mongoose";

// Define the schema for an individual address
const addressSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    minlength: 3,
    maxlength: 50,
  },
  mobileNumber: {
    type: String,
    required: true,
    trim: true,
  },
  pinCode: {
    type: String,
    required: true,
    trim: true,
  },
  locality: {
    type: String,
    required: true,
    trim: true,
    minlength: 10,
    maxlength: 100,
  },
  address: {
    type: String,
    required: true,
    trim: true,
    minlength: 10,
    maxlength: 100,
  },
  cityDistrictTown: {
    type: String,
    required: true,
    trim: true,
  },
  state: {
    type: String,
    required: true,
  },
  landmark: {
    type: String,
    minlength: 10,
    maxlength: 100,
  },
  alternatePhone: {
    type: String,
  },
  addressType: {
    type: String,
    required: true,
    enum: ["home", "work"],
  },
});

// Define the schema for user addresses, which includes an array of addressSchema
const userAddressSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User", // Reference to the User model
    },
    addresses: [addressSchema], // Array of addresses associated with the user
  },
  {
    timestamps: true, // Adds createdAt and updatedAt fields automatically
    versionKey: false, // Removes the version key "__v"
  }
);

// Create a model named "UserAddress" using userAddressSchema
const UserAddress = mongoose.model("UserAddress", userAddressSchema);

export default UserAddress;
