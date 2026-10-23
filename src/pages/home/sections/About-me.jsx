
import Reveal from "../../../components/Reveal";
import DeveloperCodeCard from "./DeveloperCodeCard";
import "./About-me.css";

function AboutMe() {
  return (
    <section className="about-me">
      <Reveal direction="up">
        <h2 className="section-heading">About Me</h2>
      </Reveal>

      <div className="about-content">
        {/* LEFT: Developer Code Card */}


        {/* RIGHT: About Description and Highlights */}
        <div className="about-details">
          <div className="about-description">
            <Reveal direction="up" delay={0.2}>
              <p className="text">
                Computer Science and Engineering graduate passionate about
                building modern web and mobile applications. I enjoy
                transforming ideas into real-world software solutions using
                Java, Spring Boot, React, Flutter, Firebase, and MySQL.
              </p>
            </Reveal>

            <Reveal direction="up" delay={0.3}>
              <p className="text">
                My primary interests include Full Stack Development,
                Android Application Development, backend system design,
                and creating software that solves real-world problems.
                I continuously improve through personal projects,
                problem solving, and learning modern development
                practices.
              </p>
            </Reveal>
          </div>


        </div>
        <div className="about-visual">
          <Reveal direction="up" delay={0.1}>
            <DeveloperCodeCard />
          </Reveal>
        </div>
      </div>

      {/* STATS */}
      <div className="stats">
        <Reveal direction="down" delay={0.2}>
          <div className="stat">
            <h2>340+</h2>
            <span>Problems Solved</span>
          </div>
        </Reveal>

        <Reveal direction="down" delay={0.4}>
          <div className="stat">
            <h2>2+</h2>
            <span>Projects Built</span>
          </div>
        </Reveal>

        <Reveal direction="down" delay={0.6}>
          <div className="stat">
            <h2>2026</h2>
            <span>CSE Graduate</span>
          </div>
        </Reveal>

        <Reveal direction="down" delay={0.8}>
          <div className="stat">
            <h2>Open</h2>
            <span>To Work</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default AboutMe;
