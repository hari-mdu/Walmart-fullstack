import mongoose from "mongoose";
import bcrypt from "bcryptjs";

// Define the schema for a user
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    mobileNumber: {
      type: Number,
      required: false,
    },
    role: {
      type: String,
      enum: ["user", "admin", "super-admin"], // Specifies possible roles
      default: "user", // Default role if not specified
    },
    profilePicture: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true, // Adds createdAt and updatedAt fields automatically
    versionKey: false, // Removes the version key "__v"
  }
);

// Middleware function to hash the password before saving
userSchema.pre("save", async function(next) {
  if (!this.isModified('password')) {
    next();
  }
  try {
    const salt = await bcrypt.genSaltSync(10); // Generate salt with bcrypt
    this.password = await bcrypt.hash(this.password, salt); // Hash the password
  } catch (error) {
    console.log("Error hashing password", error);
    next(error);
  }
});

// Method to compare entered password with hashed password
userSchema.methods.matchPassword = async function(enteredPassword) {
  return await bcrypt.compareSync(enteredPassword, this.password);
};

// Create a model named "User" using userSchema
const User = mongoose.model("User", userSchema);

export default User;
