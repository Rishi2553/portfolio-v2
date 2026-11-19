import HeroSection from "./sections/HeroSection";
import OverviewSection from "./sections/OverviewSection";
import AdminSection from "./sections/AdminSection";
import ConductorSection from "./sections/ConductorSection";
import PassengerSection from "./sections/PassengerSection";
import ArchitectureSection from "./sections/ArchitectureSection";
import DatabaseSection from "./sections/DatabaseSection";
import TechStackSection from "./sections/TechnologySection";
import HighlightsSection from "./sections/HighlightsSection";
import FutureSection from "./sections/FutureSection";
import "./BusTrackPlusPage.css";
import Reveal from "../../../components/Reveal";
import { useNavigate } from "react-router-dom";
function BusTrackPlusPage() {
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
                <Reveal delay={0.025}><AdminSection /></Reveal>
                <Reveal delay={0.05}><ConductorSection /></Reveal>
                <Reveal delay={0.075}><PassengerSection /></Reveal>
                <Reveal delay={0.1}><ArchitectureSection /></Reveal>
                <Reveal delay={0.125}><DatabaseSection /></Reveal>
                <Reveal delay={0.15}><TechStackSection /></Reveal>
                <Reveal delay={0.175}><HighlightsSection /></Reveal>
                <Reveal delay={0.2}><FutureSection /></Reveal>

            </div>

        </main>
    );
}

export default BusTrackPlusPage;
