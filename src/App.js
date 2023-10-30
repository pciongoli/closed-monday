// src/App.js
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import PortfolioPage from "./pages/PortfolioPage";
import ServicesPage from "./pages/ServicesPage";
import ContactPage from "./pages/ContactPage";
import Footer from "./components/Footer"; // Import the Footer component
import "./App.css";

function App() {
   return (
      <Router>
         <NavBar />
         <div className="app-container">
            {" "}
            {/* New container div */}
            <div className="main-content">
               <Routes>
                  <Route path="closed-monday/" element={<HomePage />} />
                  <Route path="/portfolio" element={<PortfolioPage />} />
                  <Route path="/services" element={<ServicesPage />} />
                  <Route path="/contact" element={<ContactPage />} />
               </Routes>
            </div>
            <Footer />
         </div>
      </Router>
   );
}

export default App;
