import { useState } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
import { FaChevronDown } from "react-icons/fa"; // Add the icons for dropdown

const App = () => {
  const [activeCategory, setActiveCategory] = useState(null); // Track the active category (IINF, RA-SABAL, or HDFC)
  const [activeSection, setActiveSection] = useState(null); // Track the selected section (for iframes)
  const [selectedButton, setSelectedButton] = useState(null); // Track selected button for effect

  const handleCategoryClick = (category) => {
    setActiveCategory(category === activeCategory ? null : category); // Toggle category
  };

  const handleNavClick = (sectionId, buttonId) => {
    setActiveSection(sectionId); // Set the active section for the iframe
    setSelectedButton(buttonId); // Set the selected button for effect
  };

  const renderIframe = (sectionId) => {
    // Return iframe based on the selected section

    {
      /* IINF Secton Links */
    }
    switch (sectionId) {
      case "bio_resource_centers":
        return (
          <iframe
            title="bio_resource_centers"
            src="https://app.powerbi.com/view?r=eyJrIjoiODJlMTljMjEtMGYyMC00YmM3LWFkZDgtMTA5ZmNlYjdjODVhIiwidCI6IjQ5NTM2MmE3LTQxMjItNDQ0OC1iNGU2LTIxYzQzZTRiZjRmZCJ9"
            className="w-100"
            height="700px"
          ></iframe>
        );
      case "crop_models":
        return (
          <iframe
            title="Crop_models"
            src="https://app.powerbi.com/view?r=eyJrIjoiM2ZkNzBhMWEtYTVjYS00Y2MxLWFmOGItYjk0ZjliZWU5YjUxIiwidCI6IjQ5NTM2MmE3LTQxMjItNDQ0OC1iNGU2LTIxYzQzZTRiZjRmZCJ9"
            className="w-100"
            height="700px"
          ></iframe>
        );
      case "rainfed_fisheries":
        return (
          <iframe
            title="rainfed_fisheries"
            src="https://app.powerbi.com/view?r=eyJrIjoiODMzYjk2YmYtMTNhYi00OTUxLThjYTItMGQyOWQxMGFhNDUxIiwidCI6IjQ5NTM2MmE3LTQxMjItNDQ0OC1iNGU2LTIxYzQzZTRiZjRmZCJ9"
            className="w-100"
            height="700px"
          ></iframe>
        );

      /* BYP Challenge Fund Secton Links */
      case "byp_challenge_fund":
        return (
          <iframe
            title="BYP Challenge Fund"
            src="https://app.powerbi.com/view?r=eyJrIjoiZTY0YjQwMDctZTNlYS00MGNkLTg3OWUtZGRiN2M5OGViM2I2IiwidCI6IjQ5NTM2MmE3LTQxMjItNDQ0OC1iNGU2LTIxYzQzZTRiZjRmZCJ9"
            className="w-100"
            height="700px"
          ></iframe>
        );

      /* Bio Resource Centers Secton Links */

      case "bio_resource_centers_sabal":
        return (
          <iframe
            title="PMDS and Kitchen garden_SABAL"
            src="https://app.powerbi.com/view?r=eyJrIjoiN2QwYzdhMGItMzQ3OS00NzE4LWI2NzQtZWQzY2JiZjFmNDllIiwidCI6IjQ5NTM2MmE3LTQxMjItNDQ0OC1iNGU2LTIxYzQzZTRiZjRmZCJ9"
            className="w-100"
            height="700px"
          ></iframe>
        );
      case "coffee_orchards":
        return (
          <iframe
            title="Coffee Plot Intensification"
            src="https://app.powerbi.com/view?r=eyJrIjoiOTNjZDI5NzktYWJiMS00ZmUxLWE4ZWEtZDE0MjQzYWY3MzQzIiwidCI6IjQ5NTM2MmE3LTQxMjItNDQ0OC1iNGU2LTIxYzQzZTRiZjRmZCJ9"
            className="w-100"
            height="700px"
          ></iframe>
        );
      case "nf_models":
        return (
          <iframe
            title="Capacity Building_SABAL"
            src="https://app.powerbi.com/view?r=eyJrIjoiMjk4OTUxMGUtYjBjMS00YWEyLWEwZmUtMTVkNGI0M2EwZWQxIiwidCI6IjQ5NTM2MmE3LTQxMjItNDQ0OC1iNGU2LTIxYzQzZTRiZjRmZCJ9"
            className="w-100"
            height="700px"
          ></iframe>
        );
      case "rainfed_fisheries_sabal":
        return (
          <iframe
            title="Rainfed Fisheries"
            src="https://app.powerbi.com/view?r=eyJrIjoiNWNhODVkZGMtNzE4MC00YjQyLTgwMWQtMGVjMWViYjYyYTVlIiwidCI6IjQ5NTM2MmE3LTQxMjItNDQ0OC1iNGU2LTIxYzQzZTRiZjRmZCJ9"
            className="w-100"
            height="700px"
          ></iframe>
        );

      /* RRR Links */
      case "rrr":
        return (
          <iframe
            title="RRR"
            src="https://app.powerbi.com/view?r=eyJrIjoiNjYyOWY3ZDEtZjI0Zi00NDZiLWI2ZjEtN2QxNTNhMmNhODBhIiwidCI6IjQ5NTM2MmE3LTQxMjItNDQ0OC1iNGU2LTIxYzQzZTRiZjRmZCJ9"
            className="w-100"
            height="700px"
          ></iframe>
        );

      default:
        return null;
    }
  };

  return (
    <div className="d-flex">
      {/* Sidebar */}
      <div
        style={{
          backgroundColor: "transparent",
          width: "250px",
          height: "100vh",
          borderRight: "2px solid #ddd",
        }}
      >
        <h5
          style={{
            backgroundColor: "#497482",
            padding: "15px",
            textAlign: "center",
            boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
            color: "#fff",
          }}
        >
          Wassan Northcoast Dashboards
        </h5>

        {/* IINF Dropdown */}
        <div>
          <button
            className={`btn w-100 text-start d-flex justify-content-between align-items-center ${
              activeCategory === "IINF" ? "bg-primary text-white" : ""
            }`}
            onClick={() => handleCategoryClick("IINF")}
          >
            IINF <FaChevronDown className="ml-2" />
          </button>
          {activeCategory === "IINF" && (
            <ul className="list-unstyled pl-3 mt-2">
              <li>
                <button
                  className={`btn w-100 text-start ${
                    selectedButton === "bio_resource_centers"
                      ? "bg-success text-white"
                      : ""
                  }`}
                  onClick={() =>
                    handleNavClick(
                      "bio_resource_centers",
                      "bio_resource_centers"
                    )
                  }
                >
                  Bio Resource Centers
                </button>
              </li>
              <li>
                <button
                  className={`btn w-100 text-start ${
                    selectedButton === "crop_models"
                      ? "bg-success text-white"
                      : ""
                  }`}
                  onClick={() => handleNavClick("crop_models", "crop_models")}
                >
                  Crop Models
                </button>
              </li>

              <li>
                <button
                  className={`btn w-100 text-start ${
                    selectedButton === "rainfed_fisheries"
                      ? "bg-success text-white"
                      : ""
                  }`}
                  onClick={() =>
                    handleNavClick("rainfed_fisheries", "rainfed_fisheries")
                  }
                >
                  Rainfed Fisheries{" "}
                </button>
              </li>
            </ul>
          )}
        </div>
        {/* Line Divider for IINF */}
        <div style={{ borderTop: "2px solid #ddd" }}></div>

        {/* / **************************************************** / */}

        {/* BYP Challenge Fund Button */}
        <div>
          <button
            className={`btn w-100 text-start`}
            onClick={() =>
              handleNavClick("byp_challenge_fund", "byp_challenge_fund")
            }
          >
            BYP Challenge Fund
          </button>
        </div>
        <div style={{ borderTop: "2px solid #ddd" }}></div>
        {/* / **************************************************** / */}

        {/* RA-SABAL Dropdown */}
        <div>
          <button
            className={`btn w-100 text-start d-flex justify-content-between align-items-center ${
              activeCategory === "SABAL" ? "bg-primary text-white" : ""
            }`}
            onClick={() => handleCategoryClick("SABAL")}
          >
            SABAL <FaChevronDown className="ml-2" />
          </button>
          {activeCategory === "SABAL" && (
            <ul className="list-unstyled pl-3 mt-2">
              <li>
                <button
                  className={`btn w-100 text-start ${
                    selectedButton === "bio_resource_centers_sabal"
                      ? "bg-success text-white"
                      : ""
                  }`}
                  onClick={() =>
                    handleNavClick(
                      "bio_resource_centers_sabal",
                      "bio_resource_centers_sabal"
                    )
                  }
                >
                  Bio Resource Centers{" "}
                </button>
              </li>
              <li>
                <button
                  className={`btn w-100 text-start ${
                    selectedButton === "coffee_orchards"
                      ? "bg-success text-white"
                      : ""
                  }`}
                  onClick={() =>
                    handleNavClick("coffee_orchards", "coffee_orchards")
                  }
                >
                  Coffee Orchards{" "}
                </button>
              </li>
              <li>
                <button
                  className={`btn w-100 text-start ${
                    selectedButton === "nf_models"
                      ? "bg-success text-white"
                      : ""
                  }`}
                  onClick={() => handleNavClick("nf_models", "nf_models")}
                >
                  NF Models{" "}
                </button>
              </li>
              <li>
                <button
                  className={`btn w-100 text-start ${
                    selectedButton === "rainfed_fisheries_sabal"
                      ? "bg-success text-white"
                      : ""
                  }`}
                  onClick={() =>
                    handleNavClick(
                      "rainfed_fisheries_sabal",
                      "rainfed_fisheries_sabal"
                    )
                  }
                >
                  Rainfed Fisheries
                </button>
              </li>
            </ul>
          )}
        </div>
        {/* Line Divider for RA-SABAL */}
        <div style={{ borderTop: "2px solid #ddd" }}></div>

         {/* RRR  Button */}
      <div>
        <button
          className={`btn w-100 text-start`}
          onClick={() => handleNavClick("rrr", "rrr")}
        >
          RRR{" "}
        </button>
      </div>
      <div style={{ borderTop: "2px solid #ddd" }}></div>
      {/* / **************************************************** / */}


      </div>

     

      {/* Main Content */}
      <div className="p-3 flex-grow-1">{renderIframe(activeSection)}</div>
    </div>
  );
};

export default App;
