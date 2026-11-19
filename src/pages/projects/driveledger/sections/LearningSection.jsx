import { FaCheckCircle } from "react-icons/fa";

import "../styles/LearningSection.css";
import Reveal from "../../../../components/Reveal";

const learnings = [
  "Designed a clean layered architecture using Provider and Repository Pattern.",
  "Implemented complete offline-first data management with SQLite.",
  "Built reusable Flutter widgets for maintainable UI development.",
  "Developed Excel Import and Export functionality for backup and restore.",
  "Created responsive layouts optimized for different Android screen sizes.",
  "Improved project organization with scalable folder structure and clean code practices."
];

function LearningSection() {

    return (

        <section className="learning-section">

            <Reveal><h2 className="section-title">What I Learned</h2></Reveal>

            <Reveal delay={0.06}>
            <p className="learning-subtitle">

                Building DriveLedger helped me strengthen both Flutter development
                and software engineering practices. The project focused on creating
                a scalable offline-first application with clean architecture,
                maintainable code, and an intuitive user experience.

            </p>
            </Reveal>

            <div className="learning-grid">

                {learnings.map((item, index) => (

                    <Reveal key={index} delay={index * 0.06}>
                    <div className="learning-card">

                        <FaCheckCircle className="learning-icon" />

                        <p>{item}</p>

                    </div>
                    </Reveal>

                ))}

            </div>

        </section>

    );

}

export default LearningSection;
