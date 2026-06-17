import Experience from "./Experience";
import Education from "./Education";
import ResumeButton from "./ResumeButton";
import './CareerJourney.css';

function CareerJourney() {
  return (
    <section className="career-section">
      <h2 className="section-heading">Career Journey</h2>

      <div className="career-container">

        <Experience />
        <Education />

      </div>

      <ResumeButton />


    </section>
  );
}

export default CareerJourney;