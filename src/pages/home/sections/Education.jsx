import Reveal from '../../../components/Reveal';
function Education() {
  return (
    <div className="timeline-column">
        <Reveal direction="up">
      <h3 className="timeline-title">Education</h3>
        </Reveal>
<Reveal direction="up" delay={0}>
      <div className="timeline-item">
        <div className="timeline-dot"></div>
        <div className="timeline-content">
          <h4>BE Computer Science & Engineering</h4>
          <p>SRM Easwari Engineering College</p>
          <span>2023 - 2026</span>
          <p>CGPA: 7.0 / 10</p>
        </div>
      </div>
        </Reveal>
<Reveal direction="up" delay={0.2}>

      <div className="timeline-item">
        <div className="timeline-dot"></div>
        <div className="timeline-content">
          <h4>Diploma in Mechanical Engineering</h4>
          <p>Sairam Polytechnic College</p>
          <span>2019 - 2022</span>
          <p>Percentage: 89%</p>
        </div>
      </div>
</Reveal>
    </div>
  );
}

export default Education;