import "../styles/OverviewSection.css";

function OverviewSection() {

  return (

    <section className="overview-section">

      <h2 className="section-title">
        Project Overview
      </h2>

      <div className="overview-grid">

        <div className="overview-description">

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

        <div className="overview-info">

          <div>
            <span>Platform</span>
            <strong>Android</strong>
          </div>

          <div>
            <span>Framework</span>
            <strong>Flutter</strong>
          </div>

          <div>
            <span>Database</span>
            <strong>SQLite</strong>
          </div>

          <div>
            <span>State Management</span>
            <strong>Provider</strong>
          </div>

          <div>
            <span>Architecture</span>
            <strong>Repository Pattern</strong>
          </div>

          <div>
            <span>Status</span>
            <strong>Completed</strong>
          </div>

        </div>

      </div>

    </section>

  );

}

export default OverviewSection;