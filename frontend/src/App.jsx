import { Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
import ProductPage from "./Pages/ProductPage";
import ProductsByCategory from "./Pages/ProductsByCategory";
import Cart from "./Pages/Cart";
import SignIn from "./Pages/SignIn";
import { useState } from "react";
import { ToastContainer } from "react-toastify";

function App() {
  const [users, setUsers] = useState(false); // State to manage user authentication status

  return (
    <>
      <NavBar /> {/* Navigation bar component */}
      <ToastContainer />
      <Routes>
        {/* Define route for home page */}
        <Route path="/" element={<HomePage />} />
        {/* Define route for sign-in page with setUsers prop */}
        <Route path="/signin" element={<SignIn setUsers={setUsers} />} />
        {/* Define route for individual product page with dynamic id */}
        <Route path="/product/:id" element={<ProductPage />} />
        {/* Define route for products by category page with dynamic category id */}
        <Route path="/category/:id/products" element={<ProductsByCategory />} />
        {/* Define route for cart page */}
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer /> {/* Footer component */}
    </>
  );
}

export default App;
