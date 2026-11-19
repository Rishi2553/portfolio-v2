// import { Feature } from "framer-motion";
import "./VamkhaConnectPage.css";
import HeroSection from "./sections/HeroSection";
import OverviewSection from "./sections/OverviewSection";
import FeaturesSection from "./sections/FeaturesSection";
import WorkflowSection from "./sections/WorkflowSection";
import Reveal from "../../../components/Reveal";

function VamkhaConnectPage() {

  return (

    <main className="vamkha-connect-page">

       <Reveal><HeroSection /></Reveal>
       <OverviewSection />
       <FeaturesSection />
       <WorkflowSection />

    </main>

  );

}

export default VamkhaConnectPage;
