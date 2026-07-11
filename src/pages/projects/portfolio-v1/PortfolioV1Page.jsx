import "./PortfolioV1Page.css";


import HeroSection from "./sections/HeroSection";
import OverviewSection from "./sections/OverviewSection";
import TechStackSection from "./sections/TechStackSection";
import FeaturesSection from "./sections/FeaturesSection";
import LearningSection from "./sections/LearningSection";
import EvolutionSection from "./sections/EvolutionSection";
import { useNavigate } from "react-router-dom";

function PortfolioV1Page() {
    const navigate = useNavigate();
  return (
    <main className="bus-page">

      <div className="page-container">
         <button 
                className="back-btn"
                onClick={() => navigate("/projects")}>
                    ← Back to Projects
                </button>
        <HeroSection />
        <OverviewSection />
        <TechStackSection />
        <FeaturesSection />
        <LearningSection />
        <EvolutionSection />

      </div>

    </main>
  );
}

export default PortfolioV1Page;