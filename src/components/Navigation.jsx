import {
    FaUser,
    FaCode,
    FaFolderOpen,
    FaBriefcase,
    FaEnvelope,
    FaHome
} from "react-icons/fa";

import { trackEvent } from "../utils/analytics";

function Navigation({ scrollToSection }) {

    const handleNavigation = (section) => {
        trackEvent("navigation_click", {
            section: section
        });

        scrollToSection(section);
    };

    return (
        <div className="sidebar-nav">

            <button onClick={() => handleNavigation("home")}>
                <FaHome className="nav-icon" />
                <span>Home</span>
            </button>

            <button onClick={() => handleNavigation("about")}>
                <FaUser className="nav-icon" />
                <span>About Me</span>
            </button>

            <button onClick={() => handleNavigation("skills")}>
                <FaCode className="nav-icon" />
                <span>Skills</span>
            </button>

            <button onClick={() => handleNavigation("projects")}>
                <FaFolderOpen className="nav-icon" />
                <span>Projects</span>
            </button>

            <button onClick={() => handleNavigation("career")}>
                <FaBriefcase className="nav-icon" />
                <span>Career Journey</span>
            </button>

            <button onClick={() => handleNavigation("contact")}>
                <FaEnvelope className="nav-icon" />
                <span>Contact</span>
            </button>

        </div>
    );
}

export default Navigation;