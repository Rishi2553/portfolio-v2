import javaIcon from '../assets/icons/java.png';
import SpringIcon from '../assets/icons/spring-boot.png';
import ReactIcon from '../assets/icons/react.svg';
import FlutterIcon from '../assets/icons/flutter.png';
import MySqlIcon from '../assets/icons/mysql.png';
// import HtmlIcon from '../assets/icons/html.png';
// import CssIcon from '../assets/icons/css.png';
// import JsIcon from '../assets/icons/javascript.png';
import './Skill.css';
function Skill() {
  return (
    <div className="skills-section">
      <h2 className="section-heading">Skills</h2>

      <div className="skills-grid">
        <div className="skill-card">
          <img src={javaIcon} alt="Java" />
          <p>Java</p>
        </div>

        <div className="skill-card">
          <img src={SpringIcon} alt="Spring Boot" />
          <p>Spring Boot</p>
        </div>
        <div className="skill-card">
          <img src={ReactIcon} alt="React" />
          <p>React</p>
        </div>


        <div className="skill-card">
          <img src={FlutterIcon} alt="Flutter" />
          <p>Flutter</p>
        </div>

        <div className="skill-card">
          <img src={MySqlIcon} alt="MySQL" />
          <p>MySQL</p>
        </div>

        {/* <div className="skill-card">
      <img src={HtmlIcon} alt="HTML" />
      <p>HTML</p>
    </div>

    <div className="skill-card">
      <img src={CssIcon} alt="CSS" />
      <p>CSS</p>
    </div>

    <div className="skill-card">
      <img src={JavascriptIcon} alt="JavaScript" />
      <p>JavaScript</p>
    </div> */}
      </div>
    </div>
  );
}
export default Skill;