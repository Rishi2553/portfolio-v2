import HeroSection from "./sections/HeroSection";
import BannerSection from "./sections/BannerSection";
import OverviewSection from "./sections/OverviewSection";
import AdminSection from "./sections/AdminSection";
import ConductorSection from "./sections/ConductorSection";
import PassengerSection from "./sections/PassengerSection";
import ArchitectureSection from "./sections/ArchitectureSection";
import DatabaseSection from "./sections/DatabaseSection";
import TechStackSection from "./sections/TechnologySection";
import HighlightsSection from "./sections/HighlightsSection";
import FutureSection from "./sections/FutureSection";
import ProjectVideoSection from "./sections/ProjectVideoSection";
import "./BusTrackPlusPage.css";
function BusTrackPlusPage() {
    return (
        <main className="bus-page">

            <div className="page-container">

                <button className="back-btn">
                    ← Back to Projects
                </button>
                <HeroSection />

                <BannerSection />

                <OverviewSection />

                <AdminSection />

                <ConductorSection />

                <PassengerSection />

                <ArchitectureSection />

                <DatabaseSection />

                <TechStackSection />

                <HighlightsSection />

                <FutureSection />

                <ProjectVideoSection />






            </div>

        </main>
    );
}

export default BusTrackPlusPage;