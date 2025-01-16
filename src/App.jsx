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
    switch (sectionId) {
      case "fisheries":
        return (
          <iframe
            title="Fisheries_2024-25"
            src="https://app.powerbi.com/view?r=eyJrIjoiNjgzNGUyZDEtYTFhMi00Y2E3LTg4YTAtZTFhYzAwZWMxYzUzIiwidCI6IjQ5NTM2MmE3LTQxMjItNDQ0OC1iNGU2LTIxYzQzZTRiZjRmZCJ9"
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
      case "coffee_plots":
        return (
          <iframe
            title="Coffee_Plots_ASR"
            src="https://app.powerbi.com/view?r=eyJrIjoiOWY1NGRjYzYtZGNiYS00MGRkLWE5OWMtMmU3ZjZmZDcxMjVmIiwidCI6IjQ5NTM2MmE3LTQxMjItNDQ0OC1iNGU2LTIxYzQzZTRiZjRmZCJ9"
            className="w-100"
            height="700px"
          ></iframe>
        );
      case "paddy_dehullers":
        return (
          <iframe
            title="Paddy Dehullers_NC"
            src="https://app.powerbi.com/view?r=eyJrIjoiYzY1NWEyYTMtOTYwNC00ZWQ2LTg3NGEtM2NmMWVhYzUxN2QzIiwidCI6IjQ5NTM2MmE3LTQxMjItNDQ0OC1iNGU2LTIxYzQzZTRiZjRmZCJ9"
            className="w-100"
            height="700px"
          ></iframe>
        );
      case "motorized_pulper":
        return (
          <iframe
            title="Motorized coffee pulper"
            src="https://app.powerbi.com/view?r=eyJrIjoiMmVlNzc5YTktMTE3My00ZDAzLWI4MWYtNWYxMjViMTE2MjFmIiwidCI6IjQ5NTM2MmE3LTQxMjItNDQ0OC1iNGU2LTIxYzQzZTRiZjRmZCJ9&pageName=ReportSection"
            className="w-100"
            height="700px"
          ></iframe>
        );
      case "pmds":
        return (
          <iframe
            title="PMDS and Kitchen garden_SABAL"
            src="https://app.powerbi.com/view?r=eyJrIjoiMzhjMDg4NTktYTU5Zi00NmZjLWJlZTUtNDU5YTM1NDJhZDFmIiwidCI6IjQ5NTM2MmE3LTQxMjItNDQ0OC1iNGU2LTIxYzQzZTRiZjRmZCJ9"
            className="w-100"
            height="700px"
          ></iframe>
        );
      case "coffee_plot_intensification":
        return (
          <iframe
            title="Coffee Plot Intensification"
            src="https://app.powerbi.com/view?r=eyJrIjoiODk3ZGI1N2EtMzdmMS00YWJlLWEzODQtZTA1Y2JlNTk4MDI2IiwidCI6IjQ5NTM2MmE3LTQxMjItNDQ0OC1iNGU2LTIxYzQzZTRiZjRmZCJ9"
            className="w-100"
            height="700px"
          ></iframe>
        );
      case "capacity_building":
        return (
          <iframe
            title="Capacity Building_SABAL"
            src="https://app.powerbi.com/view?r=eyJrIjoiOGMyZjkyYzctZWU4Ni00OTJkLTg3MDgtMzdjYTYwNWJmZTk1IiwidCI6IjQ5NTM2MmE3LTQxMjItNDQ0OC1iNGU2LTIxYzQzZTRiZjRmZCJ9"
            className="w-100"
            height="700px"
          ></iframe>
        );
      case "rainfed_fisheries":
        return (
          <iframe
            title="Rainfed Fisheries"
            src="https://app.powerbi.com/view?r=eyJrIjoiNjgzNGUyZDEtYTFhMi00Y2E3LTg4YTAtZTFhYzAwZWMxYzUzIiwidCI6IjQ5NTM2MmE3LTQxMjItNDQ0OC1iNGU2LTIxYzQzZTRiZjRmZCJ9"
            className="w-100"
            height="700px"
          ></iframe>
        );
      case "poultry_challenge_fund":
        return (
          <iframe
            title="Poultry Challenge Fund"
            src="https://app.powerbi.com/reportEmbed?reportId=0caf354d-4a5f-4bce-80fd-f40671522543&autoAuth=true&ctid=495362a7-4122-4448-b4e6-21c43e4bf4fd"
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
                    selectedButton === "fisheries"
                      ? "bg-success text-white"
                      : ""
                  }`}
                  onClick={() => handleNavClick("fisheries", "fisheries")}
                >
                  Fisheries Dashboard
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
                    selectedButton === "coffee_plots"
                      ? "bg-success text-white"
                      : ""
                  }`}
                  onClick={() => handleNavClick("coffee_plots", "coffee_plots")}
                >
                  Coffee Plots
                </button>
              </li>
              <li>
                <button
                  className={`btn w-100 text-start ${
                    selectedButton === "paddy_dehullers"
                      ? "bg-success text-white"
                      : ""
                  }`}
                  onClick={() =>
                    handleNavClick("paddy_dehullers", "paddy_dehullers")
                  }
                >
                  Paddy Dehullers
                </button>
              </li>
              <li>
                <button
                  className={`btn w-100 text-start ${
                    selectedButton === "motorized_pulper"
                      ? "bg-success text-white"
                      : ""
                  }`}
                  onClick={() =>
                    handleNavClick("motorized_pulper", "motorized_pulper")
                  }
                >
                  Motorized Coffee Pulper
                </button>
              </li>
            </ul>
          )}
        </div>

        {/* Line Divider for IINF */}
        <div style={{ borderTop: "2px solid #ddd" }}></div>

        {/* RA-SABAL Dropdown */}
        <div>
          <button
            className={`btn w-100 text-start d-flex justify-content-between align-items-center ${
              activeCategory === "RA-SABAL" ? "bg-primary text-white" : ""
            }`}
            onClick={() => handleCategoryClick("RA-SABAL")}
          >
            RA-SABAL <FaChevronDown className="ml-2" />
          </button>
          {activeCategory === "RA-SABAL" && (
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
              <li>
                <button
                  className={`btn w-100 text-start ${
                    selectedButton === "capacity_building"
                      ? "bg-success text-white"
                      : ""
                  }`}
                  onClick={() =>
                    handleNavClick("capacity_building", "capacity_building")
                  }
                >
                  Capacity Building
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
                  Rainfed Fisheries
                </button>
              </li>
            </ul>
          )}
        </div>

        {/* Line Divider for RA-SABAL */}
        <div style={{ borderTop: "2px solid #ddd" }}></div>

        {/* Poultry Challenge Fund Button */}
        <div>
          <button
            className={`btn w-100 text-start`}
            onClick={() =>
              handleNavClick("poultry_challenge_fund", "poultry_challenge_fund")
            }
          >
            Poultry Challenge Fund
          </button>
        </div>
        <div style={{ borderTop: "2px solid #ddd" }}></div>
        {/* HDFC Section */}
        <div className="mb-3">
          <button
            className={`btn w-100 text-start`}
            onClick={() => handleNavClick("hdfc", "hdfc")}
          >
            HDFC
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="p-3 flex-grow-1">{renderIframe(activeSection)}</div>
    </div>
  );
};

export default App;
