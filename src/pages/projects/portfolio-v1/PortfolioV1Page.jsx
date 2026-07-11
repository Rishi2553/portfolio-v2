import "./PortfolioV1Page.css";


import HeroSection from "./sections/HeroSection";
import OverviewSection from "./sections/OverviewSection";
import TechStackSection from "./sections/TechStackSection";
import FeaturesSection from "./sections/FeaturesSection";
import LearningSection from "./sections/LearningSection";
import EvolutionSection from "./sections/EvolutionSection";

function PortfolioV1Page() {
  return (
    <main className="bus-page">

      <div className="page-container">

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