import javaIcon from '../assets/icons/java.png';
import SpringIcon from '../assets/icons/spring-boot.png';
import ReactIcon from '../assets/icons/react.svg';
import FlutterIcon from '../assets/icons/flutter.png';
import MySqlIcon from '../assets/icons/mysql.png';
import {motion} from 'framer-motion';
// import HtmlIcon from '../assets/icons/html.png';
// import CssIcon from '../assets/icons/css.png';
// import JsIcon from '../assets/icons/javascript.png';
import './Skill.css';
function Skill() {
  const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: .15
    }
  }
};

const card = {
  hidden: {
    opacity: 0,
    y: 40
  },
  show: {
    opacity: 1,
    y: 0
  }
};
  return (
    <div className="skills-section">
      <h2 className="section-heading">Skills</h2>

      <motion.div className="skills-grid"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <motion.div className="skill-card" variants={card}>
          <img src={javaIcon} alt="Java" />
          <p>Java</p>
        </motion.div>

        <motion.div className="skill-card" variants={card}>
          <img src={SpringIcon} alt="Spring Boot" />
          <p>Spring Boot</p>
        </motion.div>
        <motion.div className="skill-card" variants={card}>
          <img src={ReactIcon} alt="React" />
          <p>React</p>
        </motion.div>


        <motion.div className="skill-card" variants={card}>
          <img src={FlutterIcon} alt="Flutter" />
          <p>Flutter</p>
        </motion.div>

        <motion.div className="skill-card" variants={card}>
          <img src={MySqlIcon} alt="MySQL" />
          <p>MySQL</p>
        </motion.div>

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
      </motion.div>
    </div>
  );
}
export default Skill;