import React from "react";
import { footLinks } from "../constants"; // Importing footer links from constants
import { Link } from "react-router-dom";

// Footer component
const Footer = () => {
  return (
    <>
      {/* Footer section */}
      <footer className="w-full h-auto bg-[#0071dc] p-6 ">
        <div>
          {/* List of footer links */}
          <ul className="flex flex-wrap gap-x-5 justify-center text-white text-sm font-light">
            {/* Mapping through footer links and rendering each link */}
            {footLinks.map((item) => (
              <Link to={item.path} key={item.id}>
                {/* Each link */}
                <li>{item.name}</li>
              </Link>
            ))}
          </ul>
        </div>

        {/* Footer copyright */}
        <div className="flex justify-center py-5 text-white">
          <p>@ 2024 Walmart. All Rights Reserved</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
