import User from "../models/user.model.js";
import { verifyToken } from "../utilities/jwt.js";

// Middleware function to authenticate user based on JWT token
const authentication = async (req, res, next) => {
  try {
    // Extract token from Authorization header (Bearer token)
    const token = req.headers.authorization.split(" ")[1] || null;

    // If token is not provided, return Unauthorized (401) response
    if (!token) {
      return res.status(401).send({ message: "Unauthorized" });
    }

    // Verify the token using the verifyToken function
    const decoded = verifyToken(token);

    // Find user in the database using the decoded user ID from the token
    const user = await User.findById(decoded.id);

    // Attach the user object to the request object for further use in routes
    req.user = user;

    // Call next middleware function to proceed with the request handling
    next();
  } catch (error) {
    // Return an error response if an exception occurs during authentication
    return res.status(500).send({ message: "Error in authorizing the user", error: error.message });
  }
};

// Export the authentication middleware function for use in other parts of the application
export {
  authentication
};
