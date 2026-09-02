import "../styles/OverviewSection.css";

function OverviewSection() {
  return (
    <section className="vamkha-overview">

      <div className="vamkha-overview-container">

        <div className="vamkha-section-heading">

          <span className="vamkha-section-label">
            Product Overview
          </span>

          <h2>
            A Connected Weighing-Scale Ecosystem
          </h2>

          <p>
            A mobile solution developed for VAMKHA Automation to
            connect to, operate, and support weighing-scale devices
            via Bluetooth communication
          </p>

        </div>


        <div className="vamkha-product-grid">

          {/* VAMKHA Connect */}

          <div className="vamkha-product-card">

            <div className="vamkha-product-icon">
              📱
            </div>

            <h3>
              VAMKHA Connect
            </h3>

            <span className="vamkha-product-type">
              Weighing Scale Application
            </span>

            <p>
              A mobile application designed to connect with VAMKHA
              weighing-scale devices and provide a convenient interface
              for managing and monitoring connected equipment.
            </p>

            <div className="vamkha-product-features">

              <span>Bluetooth Connectivity</span>
              <span>Weighing Scale Support</span>
              <span>Device Monitoring</span>

            </div>

          </div>


          {/* VAMKHA BT Simulator */}

          <div className="vamkha-product-card">

            <div className="vamkha-product-icon">
              🧪
            </div>

            <h3>
              VAMKHA BT Simulator
            </h3>

            <span className="vamkha-product-type">
              Internal Testing Tool
            </span>

            <p>
              An internal testing and simulation application used to
              support development and testing of Bluetooth-based
              communication with VAMKHA devices.
            </p>

            <div className="vamkha-product-features">

              <span>Bluetooth Simulation</span>
              <span>Device Testing</span>
              <span>Development Support</span>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default OverviewSection;