import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const RASABALPage = ({ selectedButton, handleNavClick }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button
        className={`btn w-100 text-start d-flex justify-content-between align-items-center ${
          selectedButton === "RA-SABAL" ? "bg-primary text-white" : ""
        }`}
        onClick={toggleDropdown}
      >
        RA-SABAL <FaChevronDown />
      </button>
      {isOpen && (
        <ul className="list-unstyled pl-3 mt-2">
          <li>
            <button
              className={`btn w-100 text-start ${
                selectedButton === "pmds" ? "bg-success text-white" : ""
              }`}
              onClick={() => handleNavClick("pmds", "pmds")}
            >
              PMDS and Kitchen Garden
            </button>
          </li>
          <li>
            <button
              className={`btn w-100 text-start ${
                selectedButton === "coffee_plot_intensification"
                  ? "bg-success text-white"
                  : ""
              }`}
              onClick={() =>
                handleNavClick(
                  "coffee_plot_intensification",
                  "coffee_plot_intensification"
                )
              }
            >
              Coffee Plot Intensification
            </button>
          </li>
        </ul>
      )}
    </div>
  );
};

export default RASABALPage;
