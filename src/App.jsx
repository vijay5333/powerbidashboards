import { useState } from "react";

const App = () => {
  const [activeSection, setActiveSection] = useState("fisheries");

  const handleNavClick = (sectionId) => {
    setActiveSection(sectionId);
  };

  return (
    <>
      <header>
        <h1>Power BI Dashboards</h1>
      </header>

      <nav>
        <a
          href="#fisheries"
          onClick={() => handleNavClick("fisheries")}
          className={activeSection === "fisheries" ? "active-link" : ""}
        >
          Fisheries Dashboard
        </a>
        <a
          href="#crop_models"
          onClick={() => handleNavClick("crop_models")}
          className={activeSection === "crop_models" ? "active-link" : ""}
        >
          Crop Models
        </a>
        <a
          href="#coffee_plots"
          onClick={() => handleNavClick("coffee_plots")}
          className={activeSection === "coffee_plots" ? "active-link" : ""}
        >
          Coffee Plots
        </a>
        <a
          href="#paddy_dehullers"
          onClick={() => handleNavClick("paddy_dehullers")}
          className={activeSection === "paddy_dehullers" ? "active-link" : ""}
        >
          Paddy Dehullers
        </a>
        <a
          href="#motorized_pulper"
          onClick={() => handleNavClick("motorized_pulper")}
          className={activeSection === "motorized_pulper" ? "active-link" : ""}
        >
          Motorized Coffee Pulper
        </a>
      </nav>

      <div id="fisheries" className={`container ${activeSection === "fisheries" ? "active" : ""}`}>
        <iframe
          title="Fisheries_2024-25"
          src="https://app.powerbi.com/view?r=eyJrIjoiNjgzNGUyZDEtYTFhMi00Y2E3LTg4YTAtZTFhYzAwZWMxYzUzIiwidCI6IjQ5NTM2MmE3LTQxMjItNDQ0OC1iNGU2LTIxYzQzZTRiZjRmZCJ9"
        ></iframe>
      </div>

      <div id="crop_models" className={`container ${activeSection === "crop_models" ? "active" : ""}`}>
        <iframe
          title="Crop_models"
          src="https://app.powerbi.com/view?r=eyJrIjoiMzhjMDg4NTktYTU5Zi00NmZjLWJlZTUtNDU5YTM1NDJhZDFmIiwidCI6IjQ5NTM2MmE3LTQxMjItNDQ0OC1iNGU2LTIxYzQzZTRiZjRmZCJ9"
        ></iframe>
      </div>

      <div id="coffee_plots" className={`container ${activeSection === "coffee_plots" ? "active" : ""}`}>
        <iframe
          title="Coffee_Plots_ASR"
          src="https://app.powerbi.com/view?r=eyJrIjoiOWY1NGRjYzYtZGNiYS00MGRkLWE5OWMtMmU3ZjZmZDcxMjVmIiwidCI6IjQ5NTM2MmE3LTQxMjItNDQ0OC1iNGU2LTIxYzQzZTRiZjRmZCJ9"
        ></iframe>
      </div>

      <div id="paddy_dehullers" className={`container ${activeSection === "paddy_dehullers" ? "active" : ""}`}>
        <iframe
          title="Paddy Dehullers_NC"
          src="https://app.powerbi.com/view?r=eyJrIjoiYzY1NWEyYTMtOTYwNC00ZWQ2LTg3NGEtM2NmMWVhYzUxN2QzIiwidCI6IjQ5NTM2MmE3LTQxMjItNDQ0OC1iNGU2LTIxYzQzZTRiZjRmZCJ9"
        ></iframe>
      </div>

      <div id="motorized_pulper" className={`container ${activeSection === "motorized_pulper" ? "active" : ""}`}>
        <iframe
          title="Motorized coffee pulper"
          src="https://app.powerbi.com/view?r=eyJrIjoiMmVlNzc5YTktMTE3My00ZDAzLWI4MWYtNWYxMjViMTE2MjFmIiwidCI6IjQ5NTM2MmE3LTQxMjItNDQ0OC1iNGU2LTIxYzQzZTRiZjRmZCJ9&pageName=ReportSection"
        ></iframe>
      </div>
    </>
  );
};

export default App;
