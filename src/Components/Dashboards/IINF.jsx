import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const IINFPage = ({ selectedButton, handleNavClick }) => {
  const [isOpen, setIsOpen] = useState(false); // State to manage dropdown visibility

  const toggleDropdown = () => {
    setIsOpen(!isOpen); // Toggle dropdown visibility
  };

  return (
    <div>
      <button
        className={`btn w-100 text-start d-flex justify-content-between align-items-center ${
          selectedButton === "IINF" ? "bg-primary text-white" : ""
        }`}
        onClick={toggleDropdown} // Toggle the dropdown on click
      >
        IINF <FaChevronDown />
      </button>
      {isOpen && ( // Only show the dropdown when isOpen is true
        <ul className="list-unstyled pl-3 mt-2">
          <li>
            <button
              className={`btn w-100 text-start ${
                selectedButton === "fisheries" ? "bg-success text-white" : ""
              }`}
              onClick={() => handleNavClick("fisheries", "fisheries")}
            >
              Fisheries Dashboard
            </button>
          </li>
          <li>
            <button
              className={`btn w-100 text-start ${
                selectedButton === "crop_models" ? "bg-success text-white" : ""
              }`}
              onClick={() => handleNavClick("crop_models", "crop_models")}
            >
              Crop Models
            </button>
          </li>
          <li>
            <button
              className={`btn w-100 text-start ${
                selectedButton === "coffee_plots" ? "bg-success text-white" : ""
              }`}
              onClick={() => handleNavClick("coffee_plots", "coffee_plots")}
            >
              Coffee Plots
            </button>
          </li>
        </ul>
      )}
    </div>
  );
};

export default IINFPage;
