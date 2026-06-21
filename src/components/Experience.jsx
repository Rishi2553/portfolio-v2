import Reveal from './Reveal';
function Experience() {
  return (
    <div className="timeline-column">
      <Reveal direction="up">
        <h3 className="timeline-title">Experience</h3>
      </Reveal>

        <Reveal direction="up" delay={0}>
      <div className="timeline-item">
        <div className="timeline-dot"></div>
        <div className="timeline-content">
          <h4>Software Intern</h4>
          <p>PercyBen OPC Private Limited</p>
          <span>December 2025 - February 2026</span>
        </div>
      </div>
        </Reveal>

<Reveal direction="up" delay={0.2}>
          <div className="timeline-item">
        <div className="timeline-dot"></div>
        <div className="timeline-content">
          <h4>Python Instructor</h4>
          <p>Shriram Matriculation School</p>
          <span>January 2025 - August 2025</span>
        </div>
      </div>
</Reveal>
<Reveal direction="up" delay={0.4}>



      <div className="timeline-item">
        <div className="timeline-dot"></div>
        <div className="timeline-content">
          <h4>Junior Engineer Trainee</h4>
          <p>Sanmar Engineering Pvt. Ltd.</p>
          <span>July 2022 - July 2023</span>
        </div>
      </div>
      </Reveal>
    </div>
    
  );
}

export default Experience;