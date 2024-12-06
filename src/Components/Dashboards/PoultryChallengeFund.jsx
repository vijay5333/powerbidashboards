import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const PoultryChallengeFundPage = ({ selectedButton, handleNavClick }) => {
  return (
    <div>
      <button
        className={`btn w-100 text-start d-flex justify-content-between align-items-center ${
          selectedButton === "poultry_challenge_fund"
            ? "bg-success text-white"
            : ""
        }`}
      >
        Poultry Challenge Fund <FaChevronDown />
      </button>
      {selectedButton === "poultry_challenge_fund" && (
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

export default PoultryChallengeFundPage;
