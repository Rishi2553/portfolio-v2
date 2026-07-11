// import React from "react";

function OverviewSection() {
  return (
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
            BusTrackPlus provides dedicated Admin, Conductor and
            Passenger applications that work together to deliver
            live bus tracking, crowd estimation, digital ticketing
            and smart bus pass management.
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
  );
}

export default OverviewSection;