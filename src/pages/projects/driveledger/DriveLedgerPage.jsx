import "./DriveLedgerPage.css";
import { useNavigate } from "react-router-dom";

import HeroSection from "./sections/HeroSection";
import OverviewSection from "./sections/OverviewSection";
import FeaturesSection from "./sections/FeaturesSection";
import ScreenshotGallery from "./components/ScreenshotGallery";
import TechStackSection from "./sections/TechStack";
import PorjectArchitectureSection from "./sections/ProjectArchitecture";
import ChallengesSection from "./sections/ChallengesSection";
import LearningSection from "../portfolio-v1/sections/LearningSection";

function DriveLedgerPage() {
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
                <FeaturesSection />
                <ScreenshotGallery />
                <TechStackSection />
                <PorjectArchitectureSection />
                <ChallengesSection />
                <LearningSection />
            </div>


        </main>

    );

}

export default DriveLedgerPage;