import axios from "axios";
import Cookies from "js-cookie";

// Retrieve token from cookies (if available)
const token = Cookies.get('product') || null;

// Create an instance of axios with baseURL and default headers
export const baseApi = axios.create({
    baseURL: import.meta.env.VITE_BASE_API_LIVE_PATH, // Base URL from environment variables
    headers: {
        "Content-Type": "application/json", // Content type header for JSON requests
        Authorization: `Bearer ${token}`, // Authorization header with Bearer token
    }
});
