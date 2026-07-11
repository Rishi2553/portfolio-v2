import {
  FaBus,
  FaUsers,
  FaRoute,
  FaMapMarkedAlt,
  FaIdCard,
  FaSyncAlt,
} from "react-icons/fa";

import passengerImg from "../../../../assets/projects/bus-track-plus/passenger.png";

function PassengerSection() {
  return (
    <section className="passenger-section">

      <div className="section-header">

        <span className="section-tag">
          Passenger Application
        </span>

        <h2>
          Live Bus Tracking & Smart Travel
        </h2>

        <p>
          The Passenger application allows commuters to monitor buses
          in real time, check live crowd levels, apply for smart bus
          passes and renew passes online without visiting a depot.
        </p>

      </div>

      <div className="passenger-layout">

        <div className="passenger-features">

          <h3>Core Features</h3>

          <div className="feature-list">

            <div className="feature-item">
              <FaBus className="feature-icon"/>
              <span>Live Bus Tracking</span>
            </div>

            <div className="feature-item">
              <FaUsers className="feature-icon"/>
              <span>Live Crowd Estimation</span>
            </div>

            <div className="feature-item">
              <FaRoute className="feature-icon"/>
              <span>Select Routes & Stops</span>
            </div>

            <div className="feature-item">
              <FaMapMarkedAlt className="feature-icon"/>
              <span>Track Upcoming Stops</span>
            </div>

            <div className="feature-item">
              <FaIdCard className="feature-icon"/>
              <span>Digital Bus Pass</span>
            </div>

            <div className="feature-item">
              <FaSyncAlt className="feature-icon"/>
              <span>Online Pass Renewal</span>
            </div>

          </div>

        </div>

        <div className="phone-preview">

          <img
            src={passengerImg}
            alt="Passenger Application"
            className="phone-image"
          />

          <div className="preview-caption">
            BusTrack Passenger Application
          </div>

        </div>

      </div>

    </section>
  );
}

export default PassengerSection;