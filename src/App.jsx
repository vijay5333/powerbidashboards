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
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  IINF
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a
                      href="#fisheries"
                      onClick={() => handleNavClick("fisheries")}
                      className={`dropdown-item ${activeSection === "fisheries" ? "active" : ""}`}
                    >
                      Fisheries Dashboard
                    </a>
                  </li>
                  <li>
                    <a
                      href="#crop_models"
                      onClick={() => handleNavClick("crop_models")}
                      className={`dropdown-item ${activeSection === "crop_models" ? "active" : ""}`}
                    >
                      Crop Models
                    </a>
                  </li>
                  <li>
                    <a
                      href="#coffee_plots"
                      onClick={() => handleNavClick("coffee_plots")}
                      className={`dropdown-item ${activeSection === "coffee_plots" ? "active" : ""}`}
                    >
                      Coffee Plots
                    </a>
                  </li>
                  <li>
                    <a
                      href="#paddy_dehullers"
                      onClick={() => handleNavClick("paddy_dehullers")}
                      className={`dropdown-item ${activeSection === "paddy_dehullers" ? "active" : ""}`}
                    >
                      Paddy Dehullers
                    </a>
                  </li>
                  <li>
                    <a
                      href="#motorized_pulper"
                      onClick={() => handleNavClick("motorized_pulper")}
                      className={`dropdown-item ${activeSection === "motorized_pulper" ? "active" : ""}`}
                    >
                      Motorized Coffee Pulper
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">RA-SABAl</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">HDFC</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Sections for iframes */}
      <div className={`container mt-3 ${activeSection === "fisheries" ? "active" : "inactive"}`}>
        <iframe
          title="Fisheries_2024-25"
          src="https://app.powerbi.com/view?r=eyJrIjoiNjgzNGUyZDEtYTFhMi00Y2E3LTg4YTAtZTFhYzAwZWMxYzUzIiwidCI6IjQ5NTM2MmE3LTQxMjItNDQ0OC1iNGU2LTIxYzQzZTRiZjRmZCJ9"
          className="w-100" 
          height="600px"
        ></iframe>
      </div>

      <div className={`container mt-3 ${activeSection === "crop_models" ? "active" : "inactive"}`}>
        <iframe
          title="Crop_models"
          src="https://app.powerbi.com/view?r=eyJrIjoiMzhjMDg4NTktYTU5Zi00NmZjLWJlZTUtNDU5YTM1NDJhZDFmIiwidCI6IjQ5NTM2MmE3LTQxMjItNDQ0OC1iNGU2LTIxYzQzZTRiZjRmZCJ9"
          className="w-100"
          height="600px"
        ></iframe>
      </div>

      <div className={`container mt-3 ${activeSection === "coffee_plots" ? "active" : "inactive"}`}>
        <iframe
          title="Coffee_Plots_ASR"
          src="https://app.powerbi.com/view?r=eyJrIjoiOWY1NGRjYzYtZGNiYS00MGRkLWE5OWMtMmU3ZjZmZDcxMjVmIiwidCI6IjQ5NTM2MmE3LTQxMjItNDQ0OC1iNGU2LTIxYzQzZTRiZjRmZCJ9"
          className="w-100"
          height="600px"
        ></iframe>
      </div>

      <div className={`container mt-3 ${activeSection === "paddy_dehullers" ? "active" : "inactive"}`}>
        <iframe
          title="Paddy Dehullers_NC"
          src="https://app.powerbi.com/view?r=eyJrIjoiYzY1NWEyYTMtOTYwNC00ZWQ2LTg3NGEtM2NmMWVhYzUxN2QzIiwidCI6IjQ5NTM2MmE3LTQxMjItNDQ0OC1iNGU2LTIxYzQzZTRiZjRmZCJ9"
          className="w-100"
          height="600px"
        ></iframe>
      </div>

      <div className={`container mt-3 ${activeSection === "motorized_pulper" ? "active" : "inactive"}`}>
        <iframe
          title="Motorized coffee pulper"
          src="https://app.powerbi.com/view?r=eyJrIjoiMmVlNzc5YTktMTE3My00ZDAzLWI4MWYtNWYxMjViMTE2MjFmIiwidCI6IjQ5NTM2MmE3LTQxMjItNDQ0OC1iNGU2LTIxYzQzZTRiZjRmZCJ9&pageName=ReportSection"
          className="w-100"
          height="600px"
        ></iframe>
      </div>
    </>
  );
};

export default App;
