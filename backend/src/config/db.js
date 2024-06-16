import mongoose from "mongoose";

// Asynchronous function to connect to MongoDB
const connectDB = async () => {
    try {
        // Attempt to connect to the database using the URI from environment variables
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("Connected to DB"); // Log success message
    } catch (error) {
        console.log("Error connecting to DB", error); // Log error message if connection fails
    }
}

// Export the connectDB function to use it in other parts of the application
export default connectDB;
