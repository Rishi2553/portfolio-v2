import {
    FaBus,
    FaRoute,
    FaMapMarkerAlt,
    FaTicketAlt,
    FaUsers,
    FaClipboardCheck,
    FaQrcode,
    FaIdCard,
    FaWifi,
    FaChartLine,
} from "react-icons/fa";
import adminImg from "../../assets/projects/bus-track-plus/admin.png";
import conductorImg from "../../assets/projects/bus-track-plus/conductor.png";
import "./BusTrackPlusPage.css";
function BusTrackPlusPage() {
    return (
        <main className="bus-page">

            <div className="page-container">

                <button className="back-btn">
                    ← Back to Projects
                </button>

                <section className="hero-section">

                    <div className="project-badge">
                        Academic Final Year Project
                    </div>

                    <h1>
                        Smart Bus Tracking & Crowd Management System
                    </h1>

                    <h3 className="hero-subtitle">
                        Full Stack Public Transportation Management Platform
                    </h3>

                    <p className="hero-description">
                        A full-stack public transportation management system
                        built using Flutter, Spring Boot, MySQL and Firebase.
                        The platform provides live bus tracking, crowd
                        estimation, digital ticketing and smart bus pass
                        management to improve the daily commuting experience.
                    </p>

                    <div className="tech-stack">

                        <span>Flutter</span>
                        <span>Spring Boot</span>
                        <span>Firebase</span>
                        <span>MySQL</span>

                    </div>

                    <div className="hero-buttons">

                        <a
                            href="https://github.com/orgs/Bus-Plus/repositories"
                            target="_blank"
                            rel="noreferrer"
                            className="github-btn"
                        >
                            View Source Code
                        </a>

                        <button className="demo-btn">
                            Live Demo (Coming Soon)
                        </button>

                    </div>

                </section>
                <section className="banner-section">

                    <div className="banner-card">

                        <img
                            src={adminImg}
                            alt="BusTrackPlus Dashboard"
                            className="banner-image"
                        />

                    </div>

                </section>
                <section className="overview-section">

                    <h2>Project Overview</h2>

                    <div className="overview-grid">

                        <div className="overview-card">
                            <h3>Problem</h3>
                            <p>
                                Passengers often lack visibility into live bus locations,
                                crowd levels, and digital ticketing options, making daily
                                commuting less efficient and predictable.
                            </p>
                        </div>

                        <div className="overview-card">
                            <h3>Solution</h3>
                            <p>
                                BusTrackPlus provides dedicated Admin, Conductor and Passenger
                                applications that work together to deliver live bus tracking,
                                crowd estimation, digital ticketing and smart bus pass management.
                            </p>
                        </div>

                        <div className="overview-card">
                            <h3>Objectives</h3>

                            <ul>
                                <li>Improve public transportation efficiency</li>
                                <li>Live bus tracking</li>
                                <li>Crowd estimation</li>
                                <li>Digital ticketing</li>
                                <li>Online bus pass management</li>
                            </ul>

                        </div>

                    </div>

                </section>
                <section className="admin-section">

                    <div className="section-header">

                        <span className="section-tag">
                            Admin Application
                        </span>

                        <h2>Administration Dashboard</h2>

                        <p>
                            The Admin application serves as the central management portal
                            for the complete transport system.
                        </p>

                    </div>

                    <div className="dashboard-preview">

                        <img
                            src={adminImg}
                            alt="BusTrack Admin Dashboard"
                            className="admin-dashboard-image"
                        />

                        <div className="preview-caption">
                            BusTrack Admin Dashboard
                        </div>

                    </div>
                    <div className="features-header">

                        <h3>Core Features</h3>

                        <p>
                            The administrator manages every aspect of the transportation
                            system through a centralized dashboard.
                        </p>

                    </div>
                    <div className="feature-grid">

                        <div className="feature-card">
                            <FaBus className="feature-icon" />
                            <h4>Bus Management</h4>
                        </div>

                        <div className="feature-card">
                            <FaRoute className="feature-icon" />
                            <h4>Route Management</h4>
                        </div>

                        <div className="feature-card">
                            <FaMapMarkerAlt className="feature-icon" />
                            <h4>Bus Stops</h4>
                        </div>

                        <div className="feature-card">
                            <FaTicketAlt className="feature-icon" />
                            <h4>Pass Management</h4>
                        </div>

                        <div className="feature-card">
                            <FaUsers className="feature-icon" />
                            <h4>User Management</h4>
                        </div>

                        <div className="feature-card">
                            <FaClipboardCheck className="feature-icon" />
                            <h4>Renewal Requests</h4>
                        </div>

                    </div>
                    <section className="responsibility-section">

                        <h3>Administrator Responsibilities</h3>

                        <p>
                            The Admin application acts as the command center for the entire
                            transport ecosystem. Administrators can register buses, create
                            and maintain routes, manage bus stops, configure pass types,
                            register conductors and passengers, approve renewal requests,
                            and monitor daily operations from a single dashboard.
                        </p>

                    </section>
                    <section className="conductor-section">

                        <div className="section-header">

                            <span className="section-tag">
                                Conductor Application
                            </span>

                            <h2>Digital Ticketing & Passenger Management</h2>

                            <p>
                                The Conductor application replaces traditional paper ticketing
                                with a modern digital solution. It enables conductors to issue
                                digital tickets, validate smart bus passes, update passenger
                                boarding information, and maintain live occupancy data that is
                                shared with the passenger application for crowd estimation.
                            </p>

                        </div>

                        <div className="conductor-layout">

                            {/* Phone Preview */}
                            <div className="phone-preview">

                                <img
                                    src={conductorImg}
                                    alt="Conductor Application"
                                    className="phone-image"
                                />

                                <div className="preview-caption">
                                    BusTrack Conductor Application
                                </div>

                            </div>

                            {/* Features */}
                            <div className="conductor-features">

                                <h3>Core Features</h3>

                                <div className="feature-list">

                                    <div className="feature-item">
                                        <FaTicketAlt className="feature-icon" />
                                        <span>Issue Digital Tickets</span>
                                    </div>

                                    <div className="feature-item">
                                        <FaIdCard className="feature-icon" />
                                        <span>Validate Smart Bus Passes</span>
                                    </div>

                                    <div className="feature-item">
                                        <FaQrcode className="feature-icon" />
                                        <span>QR Code Scanning</span>
                                    </div>

                                    <div className="feature-item">
                                        <FaWifi className="feature-icon" />
                                        <span>NFC Tap Card Support</span>
                                    </div>

                                    <div className="feature-item">
                                        <FaUsers className="feature-icon" />
                                        <span>Passenger Boarding</span>
                                    </div>

                                    <div className="feature-item">
                                        <FaChartLine className="feature-icon" />
                                        <span>Live Occupancy Updates</span>
                                    </div>

                                </div>

                            </div>

                        </div>

                    </section>

                </section>

            </div>

        </main>
    );
}

export default BusTrackPlusPage;