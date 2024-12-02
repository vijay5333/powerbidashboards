import { useState } from "react";

const App = () => {
  const [activeSection, setActiveSection] = useState("fisheries");

  const handleNavClick = (sectionId) => {
    setActiveSection(sectionId);
  };

  return (
    <>
      <header className="bg-secondary text-white text-center py-3">
        <h1>Wassan Northcoast Dashboards</h1>
      </header>

      {/* Bootstrap Nav Menu */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              {/* IINF Dropdown */}
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdownIINF"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  IINF
                </a>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownIINF"
                >
                  <li>
                    <a
                      href="#fisheries"
                      onClick={() => handleNavClick("fisheries")}
                      className={`dropdown-item ${
                        activeSection === "fisheries" ? "active" : ""
                      }`}
                    >
                      Fisheries Dashboard
                    </a>
                  </li>
                  <li>
                    <a
                      href="#crop_models"
                      onClick={() => handleNavClick("crop_models")}
                      className={`dropdown-item ${
                        activeSection === "crop_models" ? "active" : ""
                      }`}
                    >
                      Crop Models
                    </a>
                  </li>
                  <li>
                    <a
                      href="#coffee_plots"
                      onClick={() => handleNavClick("coffee_plots")}
                      className={`dropdown-item ${
                        activeSection === "coffee_plots" ? "active" : ""
                      }`}
                    >
                      Coffee Plots
                    </a>
                  </li>
                  <li>
                    <a
                      href="#paddy_dehullers"
                      onClick={() => handleNavClick("paddy_dehullers")}
                      className={`dropdown-item ${
                        activeSection === "paddy_dehullers" ? "active" : ""
                      }`}
                    >
                      Paddy Dehullers
                    </a>
                  </li>
                  <li>
                    <a
                      href="#motorized_pulper"
                      onClick={() => handleNavClick("motorized_pulper")}
                      className={`dropdown-item ${
                        activeSection === "motorized_pulper" ? "active" : ""
                      }`}
                    >
                      Motorized Coffee Pulper
                    </a>
                  </li>
                </ul>
              </li>

              {/* RA-SABAL Dropdown */}
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdownRASABAL"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  RA-SABAL
                </a>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownRASABAL"
                >
                  <li>
                    <a
                      href="#pmds"
                      onClick={() => handleNavClick("pmds")}
                      className={`dropdown-item ${
                        activeSection === "pmds" ? "active" : ""
                      }`}
                    >
                      PMDS and Kitchen garden_SABAL
                    </a>
                  </li>
                  <li>
                    <a
                      href="#coffee_plot_intensification"
                      onClick={() =>
                        handleNavClick("coffee_plot_intensification")
                      }
                      className={`dropdown-item ${
                        activeSection === "coffee_plot_intensification"
                          ? "active"
                          : ""
                      }`}
                    >
                      Coffee plot intensification_SABAL
                    </a>
                  </li>
                  <li>
                    <a
                      href="#capacity_building"
                      onClick={() => handleNavClick("capacity_building")}
                      className={`dropdown-item ${
                        activeSection === "capacity_building" ? "active" : ""
                      }`}
                    >
                      Capacity Building_SABAL
                    </a>
                  </li>
                  <li>
                    <a
                      href="#rainfed_fisheries"
                      onClick={() => handleNavClick("rainfed_fisheries")}
                      className={`dropdown-item ${
                        activeSection === "rainfed_fisheries" ? "active" : ""
                      }`}
                    >
                      Rainfed Fisheries_SABAL
                    </a>
                  </li>
                </ul>
              </li>

              {/* HDFC Nav Item */}
              <li className="nav-item">
                <a className="nav-link" href="#">
                  HDFC
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Sections for iframes */}
      <div
        className={`container mt-3 ${
          activeSection === "fisheries" ? "active" : "inactive"
        }`}
      >
        <iframe
          title="Fisheries_2024-25"
          src="https://app.powerbi.com/view?r=eyJrIjoiNjgzNGUyZDEtYTFhMi00Y2E3LTg4YTAtZTFhYzAwZWMxYzUzIiwidCI6IjQ5NTM2MmE3LTQxMjItNDQ0OC1iNGU2LTIxYzQzZTRiZjRmZCJ9"
          className="w-100"
          height="600px"
        ></iframe>
      </div>

      <div
        className={`container mt-3 ${
          activeSection === "crop_models" ? "active" : "inactive"
        }`}
      >
        <iframe
          title="Crop_models"
          src="https://app.powerbi.com/view?r=eyJrIjoiMzhjMDg4NTktYTU5Zi00NmZjLWJlZTUtNDU5YTM1NDJhZDFmIiwidCI6IjQ5NTM2MmE3LTQxMjItNDQ0OC1iNGU2LTIxYzQzZTRiZjRmZCJ9"
          className="w-100"
          height="600px"
        ></iframe>
      </div>

      <div
        className={`container mt-3 ${
          activeSection === "coffee_plots" ? "active" : "inactive"
        }`}
      >
        <iframe
          title="Coffee_Plots_ASR"
          src="https://app.powerbi.com/view?r=eyJrIjoiOWY1NGRjYzYtZGNiYS00MGRkLWE5OWMtMmU3ZjZmZDcxMjVmIiwidCI6IjQ5NTM2MmE3LTQxMjItNDQ0OC1iNGU2LTIxYzQzZTRiZjRmZCJ9"
          className="w-100"
          height="600px"
        ></iframe>
      </div>

      <div
        className={`container mt-3 ${
          activeSection === "paddy_dehullers" ? "active" : "inactive"
        }`}
      >
        <iframe
          title="Paddy Dehullers_NC"
          src="https://app.powerbi.com/view?r=eyJrIjoiYzY1NWEyYTMtOTYwNC00ZWQ2LTg3NGEtM2NmMWVhYzUxN2QzIiwidCI6IjQ5NTM2MmE3LTQxMjItNDQ0OC1iNGU2LTIxYzQzZTRiZjRmZCJ9"
          className="w-100"
          height="600px"
        ></iframe>
      </div>

      <div
        className={`container mt-3 ${
          activeSection === "motorized_pulper" ? "active" : "inactive"
        }`}
      >
        <iframe
          title="Motorized coffee pulper"
          src="https://app.powerbi.com/view?r=eyJrIjoiMmVlNzc5YTktMTE3My00ZDAzLWI4MWYtNWYxMjViMTE2MjFmIiwidCI6IjQ5NTM2MmE3LTQxMjItNDQ0OC1iNGU2LTIxYzQzZTRiZjRmZCJ9&pageName=ReportSection"
          className="w-100"
          height="600px"
        ></iframe>
      </div>

      {/* RA-SABAL Sections */}
      <div
        className={`container mt-3 ${
          activeSection === "pmds" ? "active" : "inactive"
        }`}
      >
        <iframe
          title="Crop_models-SABAL"
          className="w-100"
          height="600px"
          src="https://app.powerbi.com/view?r=eyJrIjoiMzhjMDg4NTktYTU5Zi00NmZjLWJlZTUtNDU5YTM1NDJhZDFmIiwidCI6IjQ5NTM2MmE3LTQxMjItNDQ0OC1iNGU2LTIxYzQzZTRiZjRmZCJ9"
        ></iframe>
      </div>

      <div
        className={`container mt-3 ${
          activeSection === "coffee_plot_intensification"
            ? "active"
            : "inactive"
        }`}
      >
        <iframe
          title="Crop models_PMDS"
          src="https://app.powerbi.com/view?r=eyJrIjoiODk3ZGI1N2EtMzdmMS00YWJlLWEzODQtZTA1Y2JlNTk4MDI2IiwidCI6IjQ5NTM2MmE3LTQxMjItNDQ0OC1iNGU2LTIxYzQzZTRiZjRmZCJ9"
          className="w-100"
          height="600px"
        ></iframe>
      </div>

      <div
        className={`container mt-3 ${
          activeSection === "capacity_building" ? "active" : "inactive"
        }`}
      >
        <iframe
          title="Capacity Building_RA"
          src="https://app.powerbi.com/view?r=eyJrIjoiOGMyZjkyYzctZWU4Ni00OTJkLTg3MDgtMzdjYTYwNWJmZTk1IiwidCI6IjQ5NTM2MmE3LTQxMjItNDQ0OC1iNGU2LTIxYzQzZTRiZjRmZCJ9"
          className="w-100"
          height="600px"
        ></iframe>
      </div>

      <div
        className={`container mt-3 ${
          activeSection === "rainfed_fisheries" ? "active" : "inactive"
        }`}
      >
        <iframe
          title="Fisheries_2024-25"
          src="https://app.powerbi.com/view?r=eyJrIjoiNjgzNGUyZDEtYTFhMi00Y2E3LTg4YTAtZTFhYzAwZWMxYzUzIiwidCI6IjQ5NTM2MmE3LTQxMjItNDQ0OC1iNGU2LTIxYzQzZTRiZjRmZCJ9"
          className="w-100"
          height="600px"
        ></iframe>
      </div>
    </>
  );
};

export default App;
