import jwt from "jsonwebtoken";

// Function to create a JWT token with the provided data
const createToken = (data) => {
  return jwt.sign(data, process.env.JWT_SECRET_KEY, {
    expiresIn:"1d",
  });
};
// Function to verify and decode a JWT token
const verifyToken = (token) =>{
    return jwt.verify(token, process.env.JWT_SECRET_KEY);
}

export {
    createToken,
    verifyToken
}