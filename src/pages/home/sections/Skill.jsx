import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaJava,
  FaGitAlt,
  FaGithub,
  FaKey,
  FaServer,
} from "react-icons/fa";

import {
  SiSpringboot,
  SiFlutter,
  SiDart,
  SiFirebase,
  SiReactrouter,
  SiPostman,
  // SiVisualstudiocode,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

import { GrMysql } from "react-icons/gr";

import { motion } from "framer-motion";

import "./Skill.css";
import Reveal from "../../../components/Reveal";

function Skill() {
  const categories = [
    {
      title: "Frontend",
      skills: [
        { icon: <FaReact />, name: "React" },
        { icon: <FaHtml5 />, name: "HTML5" },
        { icon: <FaCss3Alt />, name: "CSS3" },
        { icon: <FaJsSquare />, name: "JavaScript" },
        { icon: <SiReactrouter />, name: "React Router" },
      ],
    },

    {
      title: "Backend",
      skills: [
        { icon: <FaJava />, name: "Java" },
        { icon: <SiSpringboot />, name: "Spring Boot" },
        { icon: <FaKey />, name: "JWT" },
        { icon: <FaServer />, name: "REST APIs" },
      ],
    },

    {
      title: "Mobile",
      skills: [
        { icon: <SiFlutter />, name: "Flutter" },
        { icon: <SiDart />, name: "Dart" },
      ],
    },

    {
      title: "Database & Cloud",
      skills: [
        { icon: <GrMysql />, name: "MySQL" },
        { icon: <SiFirebase />, name: "Firebase" },
      ],
    },

    {
      title: "Tools",
      skills: [
        { icon: <FaGitAlt />, name: "Git" },
        { icon: <FaGithub />, name: "GitHub" },
        { icon: <VscVscode />, name: "VS Code" },
        { icon: <SiPostman />, name: "Postman" },
      ],
    },
  ];

  return (
    <section className="skills-section">
      <Reveal direction="up">
        <h2 className="section-heading">Technical Skills</h2>
      </Reveal>
      <Reveal
        direction="up"
        delay={0.4}
      >
        <motion.div
          className="category-grid"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {categories.map((category) => (

            <div className="category-card" key={category.title}>
              <h3>{category.title}</h3>

              <div className="skills-list">
                {category.skills.map((skill) => (
                  <div className="skill-item" key={skill.name}>
                    <span className="skill-icon">{skill.icon}</span>
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </motion.div>
      </Reveal>
    </section>
  );
}

export default Skill;