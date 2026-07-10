import { useState } from "react";
import '../../components/Project.css';
import adminImg from '../../assets/projects/bus-track-plus/admin.png';
import conductorImg from '../../assets/projects/bus-track-plus/conductor.png';
import passengerImg from '../../assets/projects/bus-track-plus/passenger.png';
function BusTrackPlus() {
  const [showMore, setShowMore] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  return (
    <div className="project-card">
      <h3>Smart Bus Tracking & Crowd Management System</h3>
      <p className="text">
        A full-stack public transportation management system built using
        Flutter, Spring Boot, MySQL, and Firebase. The system provides
        real-time bus tracking, live crowd monitoring, crowd estimation,
        digital ticketing, and online bus pass management to improve the
        daily commuting experience.
      </p>

      <div className={`project-details ${showMore ? "show" : ""}`}>
        <div className="module-card left-image">
          <div className="image-container">
            <img
              src={adminImg}
              className="module-img"
              alt="Admin Module"
              onClick={() => setSelectedImage(adminImg)}
            />
            <span className="image-tooltip">
              Click image to view
            </span>
          </div>
          <div>
            <h4>Admin Module</h4>
            <p className="text">
              The Admin Module acts as the central management system for
              the entire transport network. Administrators can manage
              buses, routes, bus stops, pass types, passenger accounts,
              and conductor accounts. They can also issue new passes,
              review renewal requests submitted by passengers, and
              approve or reject requests while monitoring overall system
              operations.
            </p>
          </div>
        </div>
        <div className="module-card right-image">
          <div className="image-container">
            <img
              src={conductorImg}
              className="module-img"
              alt="Conductor Module"
              onClick={() => setSelectedImage(conductorImg)}
            />
            <span className="image-tooltip">
              Click image to view
            </span>
          </div>
          <div>
            <h4>Conductor Module</h4>
            <p className="text">
              The Conductor Module digitizes traditional bus operations.
              Conductors can issue tickets, verify digital bus passes,
              update passenger boarding information, and maintain
              occupancy data. This information is used to calculate live
              crowd levels and estimate crowd conditions at upcoming bus
              stops for passengers waiting to board.
            </p>
          </div>
        </div>
        <div className="module-card left-image">
          <div className="image-container">
            <img
              src={passengerImg}
              className="module-img"
              alt="Passenger Module"
              onClick={() => setSelectedImage(passengerImg)}
            />
            <span className="image-tooltip">
              Click image to view
            </span>
          </div>
          <div>
            <h4>Passenger Module</h4>
            <p className="text">
              Passengers can track buses in real time, view current crowd
              levels inside buses, and check estimated crowd conditions
              at their selected boarding stop. This helps commuters
              decide whether to board the approaching bus or wait for the
              next available service. The module also supports online bus
              pass applications, renewals, and digital pass management
              without requiring a visit to a physical bus depot.
            </p>
          </div>
        </div>
      </div>

      <button
        className="view-more-btn"
        title={showMore ? "Click to view less" : "Click to view more"}
        onClick={() => setShowMore(!showMore)}
      >
        {showMore ? "View Less ▲" : "View More ▼"}
      </button>
      <div className="github-link">
        <p className="text">
          View Source Code on GitHub{" "}
          <a
            href="https://github.com/orgs/Bus-Plus/repositories"
            target="_blank"
            rel="noopener noreferrer"
          >
            Click Here
          </a>
        </p>
      </div>
      {selectedImage && (
        <div
          className="image-popup"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="close-btn"
            onClick={() => setSelectedImage(null)}
          >
            ✕
          </button>

          <img
            src={selectedImage}
            alt="Preview"
            className="popup-image"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
}

export default BusTrackPlus;