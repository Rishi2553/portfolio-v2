import {
    FaUser,
    FaCode,
    FaFolderOpen,
    FaBriefcase,
    FaEnvelope,
    FaHome
} from "react-icons/fa";



function Navigation({ scrollToSection }) {


    return (
        <div className="sidebar-nav">
            <button onClick={() => scrollToSection("home")}>
                <FaHome className="nav-icon" />
                <span>Home</span>
            </button>

            <button onClick={() => scrollToSection("about")}>
                <FaUser className="nav-icon" />
                <span>About Me</span>
            </button>

            <button onClick={() => scrollToSection("skills")}>
                <FaCode className="nav-icon" />
                <span>Skills</span>
            </button>

            <button onClick={() => scrollToSection("projects")}>
                <FaFolderOpen className="nav-icon" />
                <span>Projects</span>
            </button>

            <button onClick={() => scrollToSection("career")}>
                <FaBriefcase className="nav-icon" />
                <span>Career Journey</span>
            </button>

            <button onClick={() => scrollToSection("contact")}>
                <FaEnvelope className="nav-icon" />
                <span>Contact</span>
            </button>

        </div>
    );
}

export default Navigation;