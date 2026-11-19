import "./PortfolioV1Page.css";


import HeroSection from "./sections/HeroSection";
import OverviewSection from "./sections/OverviewSection";
import TechStackSection from "./sections/TechStackSection";
import FeaturesSection from "./sections/FeaturesSection";
import LearningSection from "./sections/LearningSection";
import EvolutionSection from "./sections/EvolutionSection";
import { useNavigate } from "react-router-dom";
import Reveal from "../../../components/Reveal";

function PortfolioV1Page() {
    const navigate = useNavigate();
  return (
    <main className="bus-page">

      <div className="page-container">
        <div className="project-back-row">
          <button
            className="back-btn"
            onClick={() => navigate("/projects")}
          >
            ← Back to Projects
          </button>
        </div>
        <Reveal><HeroSection /></Reveal>
        <OverviewSection />
        <TechStackSection />
        <FeaturesSection />
        <LearningSection />
        <Reveal delay={0.16}><EvolutionSection /></Reveal>

      </div>

    </main>
  );
}

export default PortfolioV1Page;
