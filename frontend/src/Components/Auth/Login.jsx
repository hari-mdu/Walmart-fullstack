import React, { useState, useEffect } from "react";
import { collection, onSnapshot, query } from "firebase/firestore";
import { db } from "../../firebase";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { baseApi } from "../../api/axiosInstance";
import Cookies from "js-cookie"

// Login component
const Login = ({ setUsers }) => {
  // State to manage form inputs
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  // State to store all users fetched from Firestore
  const [user, setUser] = useState([]);

  // React Router hook for navigation
  const navigate = useNavigate();

  const LoginUser = async()=>{
    try {
      const response = await baseApi.post("/user/login", userData)
      Cookies.set('token', response.data.token, { expires: 7, secure : true });
      navigate('/'); // Redirect to home page
      toast.success('User login successfully')
    } catch (error) {
      console.error("Login error", error)
      toast.error('Login error')
    }
  }

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userData);
    // checkUserCredentials();
    LoginUser()
  };

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };


  
  // JSX for login form
  return (
    <>
      <form action="" onSubmit={handleSubmit} autoComplete="off">
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter your email"
            required={true}
            name="email"
            onChange={handleChange}
            value={userData.email}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter your password"
            required={true}
            name="password"
            onChange={handleChange}
            value={userData.password}
          />
        </div>
        <div className="flex items-center justify-evenly">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Sign In
          </button>
        </div>
      </form>
    </>
  );
};

export default Login;
