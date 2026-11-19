import "../styles/OverviewSection.css";
import Reveal from "../../../../components/Reveal";

const projectDetails = [
  ["Platform", "Android"],
  ["Framework", "Flutter"],
  ["Database", "SQLite"],
  ["State Management", "Provider"],
  ["Architecture", "Repository Pattern"],
  ["Status", "Completed"],
];

function OverviewSection() {

  return (

    <section className="overview-section drive-overview-section">

      <Reveal>
        <h2 className="section-title">Project Overview</h2>
      </Reveal>

      <div className="overview-grid">

        <Reveal delay={0.08}>
        <div className="overview-description">

          <span className="overview-eyebrow">About the App</span>

          <p>
            DriveLedger is an offline-first Android application developed
            using Flutter to help cab drivers efficiently track daily income,
            expenses, and profit. The application focuses on simplicity,
            speed, and reliability by storing all data locally using SQLite.
          </p>

          <p>
            Users can generate reports, manage transactions, and seamlessly
            export or import data through Excel files, making backup and
            migration effortless without relying on cloud services.
          </p>

        </div>
        </Reveal>

        <div className="overview-info">
          <Reveal delay={0.1}>
            <h3 className="overview-info-heading">Project at a Glance</h3>
          </Reveal>
          {projectDetails.map(([label, value], index) => (
            <Reveal key={label} delay={0.14 + index * 0.06}>
              <div className="overview-info-item">
                <span>{label}</span>
                <strong>{value}</strong>
              </div>
            </Reveal>
          ))}
        </div>

      </div>

    </section>

  );

}

export default OverviewSection;
