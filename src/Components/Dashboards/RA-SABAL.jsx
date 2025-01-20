import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const RASABALPage = ({ selectedButton, handleNavClick }) => {
  const [isOpen, setIsOpen] = useState(false); // State to manage dropdown visibility

  const toggleDropdown = () => {
    setIsOpen(!isOpen); // Toggle dropdown visibility
  };

  return (
    <div>
      {/* Category Button for RA-SABAL */}
      <button
        className={`btn w-100 text-start d-flex justify-content-between align-items-center ${
          selectedButton === "SABAL" ? "bg-primary text-white" : ""
        }`}
        onClick={toggleDropdown} // Toggle the dropdown on click
      >
        RA-SABAL <FaChevronDown />
      </button>

      {/* Dropdown Menu */}
      {isOpen && ( // Only show the dropdown when isOpen is true
        <ul className="list-unstyled pl-3 mt-2">
          <li>
            <button
              className={`btn w-100 text-start ${
                selectedButton === "bio_resource_centers_sabal" ? "bg-success text-white" : ""
              }`}
              onClick={() =>
                handleNavClick("bio_resource_centers_sabal", "bio_resource_centers_sabal")
              }
            >
              Bio Resource Centers
            </button>
          </li>
          <li>
            <button
              className={`btn w-100 text-start ${
                selectedButton === "coffee_orchards" ? "bg-success text-white" : ""
              }`}
              onClick={() => handleNavClick("coffee_orchards", "coffee_orchards")}
            >
              Coffee Orchards
            </button>
          </li>
          <li>
            <button
              className={`btn w-100 text-start ${
                selectedButton === "nf_models" ? "bg-success text-white" : ""
              }`}
              onClick={() => handleNavClick("nf_models", "nf_models")}
            >
              NF Models
            </button>
          </li>
          <li>
            <button
              className={`btn w-100 text-start ${
                selectedButton === "rainfed_fisheries_sabal" ? "bg-success text-white" : ""
              }`}
              onClick={() =>
                handleNavClick("rainfed_fisheries_sabal", "rainfed_fisheries_sabal")
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

export default RASABALPage;
