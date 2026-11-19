import Reveal from "../../../../components/Reveal";
import { FaBullseye, FaExclamationCircle, FaLightbulb } from "react-icons/fa";

function OverviewSection() {
  return (
    <section className="overview-section">

      <Reveal><h2>Project Overview</h2></Reveal>

      <div className="overview-grid">

        <Reveal delay={0.08}>
        <div className="overview-card">

          <div className="overview-card-icon"><FaExclamationCircle /></div>
          <span className="overview-eyebrow">Current Challenge</span>
          <h3>Problem</h3>

          <p>
            Passengers often lack visibility into live bus locations,
            crowd levels, and digital ticketing options, making daily
            commuting less efficient and predictable.
          </p>

        </div>
        </Reveal>

        <Reveal delay={0.16}>
        <div className="overview-card">

          <div className="overview-card-icon"><FaLightbulb /></div>
          <span className="overview-eyebrow">Our Approach</span>
          <h3>Solution</h3>

          <p>
            BusTrackPlus provides dedicated Admin, Conductor and
            Passenger applications that work together to deliver
            live bus tracking, crowd estimation, digital ticketing
            and smart bus pass management.
          </p>

        </div>
        </Reveal>

        <Reveal delay={0.24}>
        <div className="overview-card">

          <div className="overview-card-icon"><FaBullseye /></div>
          <span className="overview-eyebrow">Key Outcomes</span>
          <h3>Objectives</h3>

          <ul className="overview-objectives">

            <li>Improve public transportation efficiency</li>

            <li>Live bus tracking</li>

            <li>Crowd estimation</li>

            <li>Digital ticketing</li>

            <li>Online bus pass management</li>

          </ul>

        </div>
        </Reveal>

      </div>

    </section>
  );
}

export default OverviewSection;
