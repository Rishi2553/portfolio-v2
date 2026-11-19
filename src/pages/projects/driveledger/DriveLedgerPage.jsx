import "./DriveLedgerPage.css";
import { useNavigate } from "react-router-dom";

import HeroSection from "./sections/HeroSection";
import OverviewSection from "./sections/OverviewSection";
import FeaturesSection from "./sections/FeaturesSection";
import ScreenshotGallery from "./components/ScreenshotGallery";
import TechStackSection from "./sections/TechStack";
import PorjectArchitectureSection from "./sections/ProjectArchitecture";
import ChallengesSection from "./sections/ChallengesSection";
import LearningSection from "./sections/LearningSection";
import Reveal from "../../../components/Reveal";

function DriveLedgerPage() {
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
                <FeaturesSection />
                <Reveal delay={0.08}><ScreenshotGallery /></Reveal>
                <TechStackSection />
                <PorjectArchitectureSection />
                <ChallengesSection />
                <LearningSection />
            </div>


        </main>

    );

}

export default DriveLedgerPage;
