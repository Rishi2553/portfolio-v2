import {
  FaBus,
  FaRoute,
  FaMapMarkerAlt,
  FaTicketAlt,
  FaUsers,
  FaClipboardCheck,
} from "react-icons/fa";

import adminImg from "../../../../assets/projects/bus-track-plus/admin.png";

function AdminSection() {
  return (
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

    </section>
  );
}

export default AdminSection;