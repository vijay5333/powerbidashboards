import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const BypChallengeFundPage = ({ selectedButton, handleNavClick }) => {
  const [isOpen, setIsOpen] = useState(false); // State to manage dropdown visibility

  const toggleDropdown = () => {
    setIsOpen(!isOpen); // Toggle dropdown visibility
  };

  return (
    <div>
      {/* Button for Poultry Challenge Fund */}
      <button
        className={`btn w-100 text-start d-flex justify-content-between align-items-center ${
          selectedButton === "byp_challenge_fund" ? "bg-primary text-white" : ""
        }`}
        onClick={toggleDropdown} // Toggle the dropdown on click
      >
        BYP Challenge Fund <FaChevronDown />
      </button>

      {/* Dropdown Menu */}
      {isOpen && ( // Only show the dropdown when isOpen is true
        <ul className="list-unstyled pl-3 mt-2">
          <li>
            <button
              className={`btn w-100 text-start ${
                selectedButton === "baseline" ? "bg-success text-white" : ""
              }`}
              onClick={() => handleNavClick("baseline", "baseline")}
            >
              Baseline
            </button>
          </li>
          <li>
            <button
              className={`btn w-100 text-start ${
                selectedButton === "service" ? "bg-success text-white" : ""
              }`}
              onClick={() => handleNavClick("service", "service")}
            >
              Service
            </button>
          </li>
        </ul>
      )}
    </div>
  );
};

export default BypChallengeFundPage;
