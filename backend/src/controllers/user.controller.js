import User from "../models/user.model.js";
import { sendEmail } from "../utilities/email.js";
import { createToken } from "../utilities/jwt.js";

// Handler to register a new user
const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    
    // Create a new user in the database
    const user = await User.create({
      name,
      email,
      password,
    });

    // Prepare email options
    const emailOptions = {
      from: "hari15092001@gmail.com",
      to: email,
      subject: "Welcome to Walmart",
      html: `<h1>Welcome ${name}</h1> 
      <p>Thanks for registering</p>
      <p>Now you can login to our platform with your email and password</p>
      <p>Thanks</p>`
    };

    // Send registration email
    sendEmail(emailOptions);

    // Return a success response with a 201 Created status
    return res.status(201).send({ message: "User registered successfully" });
  } catch (error) {
    // Return an error response if an exception occurs
    return res.status(500).send({ message: "Error registering user", error: error.message });
  }
};

// Handler to login an existing user
const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find the user by email
    const user = await User.findOne({ email });

    // If user doesn't exist, return invalid credentials error
    if (!user) {
      return res.status(400).send({ message: "Invalid credentials" });
    }

    // Check if the provided password matches the user's password
    const passwordMatch = await user.matchPassword(password);
    if (!passwordMatch) {
      return res.status(400).send({ message: "Invalid credentials" });
    }

    // Create a JWT token for the user
    const token = createToken({ id: user._id });

    // Set the JWT token as a cookie in the response
    res.cookie("authToken", token, {
      path: "/",
      expires: new Date(Date.now() + 3600000), // Token expiry time (1 hour)
      secure: true, // Ensures the cookie is only sent over HTTPS
      httpOnly: true, // Ensures the cookie is not accessible via JavaScript
      sameSite: "None", // Helps protect against CSRF attacks
    });

    // Return a success response with a 200 OK status and the token
    return res.status(200).send({ message: "User logged in successfully", token });
  } catch (error) {
    // Return an error response if an exception occurs
    return res.status(500).send({ message: "Error in logging the user", error: error.message });
  }
};

// Handler to logout a user
const logout = async (req, res) => {
  // Clear the authToken cookie from the response
  res.clearCookie("authToken");

  // Return a success response with a 200 OK status
  return res.status(200).send({ message: "User logged out successfully" });
};

// Handler to delete a user by ID
const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;

    // Find and delete the user by ID
    const user = await User.findByIdAndDelete(id);

    // If user doesn't exist, return user not found error
    if (!user) {
      return res.status(404).send({ message: "User not found" });
    }

    // Return a success response with a 200 OK status
    return res.status(200).send({ message: "User deleted successfully" });
  } catch (error) {
    // Return an error response if an exception occurs
    return res.status(500).send({ message: "Error in deleting the user", error: error.message });
  }
};

// Export the handler functions for use in other parts of the application
export { register, login, logout, deleteUser };
