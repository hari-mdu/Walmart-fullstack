import React, { useState } from "react";
import { Register } from "../Components/Auth/Register";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { Link } from "react-router-dom";
import Login from "../Components/Auth/Login";

const SignIn = ({ setUsers }) => {
  // State to toggle between sign-in and registration forms
  const [isSignIn, setIsSignIn] = useState(true); 

  // Function to toggle between sign-in and registration forms
  const toggleForm = () => setIsSignIn(!isSignIn);

  return (
    <>
      <div className="flex items-center justify-center z-50 my-5">
        {/* Container for the sign-in/register form */}
        <div className="rounded-lg overflow-hidden shadow-xl max-w-sm w-full z-50">
          <div className="px-6 py-4">
            {/* Toast notifications container */}
           
            {/* Form title */}
            <div className="text-lg text-center font-medium text-gray-900">
              {isSignIn ? "Sign In" : "Register"}
            </div>
            <div className="mt-4">
              {/* Render Login or Register component based on the current form state */}
              {isSignIn ? <Login setUsers={setUsers} /> : <Register />}
              <div className="mt-4 text-center">
                {/* Button to toggle between sign-in and register forms */}
                <button
                  onClick={toggleForm}
                  className="text-blue-500 hover:underline"
                >
                  {isSignIn
                    ? "Need an account? Register"
                    : "Have an account? Sign In"}
                </button>
              </div>
            </div>
          </div>
          {/* Close button to navigate back to the home page */}
          <div className="px-6 py-4 bg-gray-100 border-t border-gray-200">
            <Link to="/">
              <button className="text-blue-500 hover:text-gray-700 font-bold py-2 px-4 rounded">
                Close
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
