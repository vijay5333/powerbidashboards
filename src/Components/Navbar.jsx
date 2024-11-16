const Navbar =() => {
    return(
        <>
<header>
    <h1>Power BI Dashboards</h1>
</header>

<nav>
    <a href="#" onClick="showDashboard('fisheries')">Fisheries Dashboard</a>
    <a href="#" onClick="showDashboard('crop_models')">Crop Models</a>
    <a href="#" onClick="showDashboard('coffee_plots')">Coffee Plots</a>
    <a href="#" onClick="showDashboard('paddy_dehullers')">Paddy Dehullers</a>
    <a href="#" onClick="showDashboard('motorized_pulper')">Motorized Coffee Pulper</a>
</nav>
</>
)
}
export default Navbar;