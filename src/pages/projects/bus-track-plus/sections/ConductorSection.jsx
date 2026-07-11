import {
  FaTicketAlt,
  FaIdCard,
  FaQrcode,
  FaWifi,
  FaUsers,
  FaChartLine,
} from "react-icons/fa";

import conductorImg from "../../../../assets/projects/bus-track-plus/conductor.png";

function ConductorSection() {
  return (
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
  );
}

export default ConductorSection;