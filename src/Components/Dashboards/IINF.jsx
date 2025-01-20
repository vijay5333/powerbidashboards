import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const IINFPage = ({ selectedButton, handleNavClick }) => {
  const [isOpen, setIsOpen] = useState(false); // State to manage dropdown visibility

  const toggleDropdown = () => {
    setIsOpen(!isOpen); // Toggle dropdown visibility
  };

  return (
    <div>
      {/* Category Button for IINF */}
      <button
        className={`btn w-100 text-start d-flex justify-content-between align-items-center ${
          selectedButton === "IINF" ? "bg-primary text-white" : ""
        }`}
        onClick={toggleDropdown} // Toggle the dropdown on click
      >
        IINF <FaChevronDown />
      </button>

      {/* Dropdown Menu */}
      {isOpen && ( // Only show the dropdown when isOpen is true
        <ul className="list-unstyled pl-3 mt-2">
          <li>
            <button
              className={`btn w-100 text-start ${
                selectedButton === "bio_resource_centers" ? "bg-success text-white" : ""
              }`}
              onClick={() =>
                handleNavClick("bio_resource_centers", "bio_resource_centers")
              }
            >
              Bio Resource Centers
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
                selectedButton === "rainfed_fisheries" ? "bg-success text-white" : ""
              }`}
              onClick={() =>
                handleNavClick("rainfed_fisheries", "rainfed_fisheries")
              }
            >
              Rainfed Fisheries
            </button>
          </li>
        </ul>
      )}
    </div>
  );
};

export default IINFPage;
