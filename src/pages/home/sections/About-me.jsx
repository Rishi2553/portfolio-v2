import Reveal from "../../../components/Reveal";
import "./About-me.css";

function AboutMe() {
  return (
    <section className="about-me">

      <Reveal direction="up">
        <h2 className="section-heading">
          About Me
        </h2>
      </Reveal>

      <div className="about-content">

        {/* LEFT */}
        

        <div className="about-description">
          <Reveal direction="up" delay={0.2}>
          <p className="text">
            Computer Science and Engineering graduate passionate about
            building modern web and mobile applications. I enjoy
            transforming ideas into real-world software solutions using
            Java, Spring Boot, React, Flutter, Firebase, and MySQL.
          </p>
          </Reveal>
          <Reveal direction="up" delay={0.4}>

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
       

        {/* RIGHT */}
        
          
        <div className="about-highlights">
           <Reveal direction="up" delay={0.2}>

          <div className="highlight">
            <span className="number">01</span>

            <div>

              <h3>Full Stack Development</h3>

              <p>
                Building scalable backend systems and responsive web
                applications.
              </p>

            </div>
          </div>
          </Reveal>
          <Reveal direction="up" delay={0.4}>

          <div className="highlight">
            <span className="number">02</span>

            <div>

              <h3>Mobile Development</h3>

              <p>
                Developing Android applications using Flutter
                and Firebase.
              </p>

            </div>
          </div>
          </Reveal>
           <Reveal direction="up" delay={0.6}>


          <div className="highlight">
            <span className="number">03</span>

            <div>

              <h3>Problem Solving</h3>

              <p>
                Solved 340+ LeetCode problems using Java
                to strengthen DSA.
              </p>

            </div>
          </div>
          </Reveal>
          <Reveal direction="up" delay={0.8}>

          <div className="highlight">
            <span className="number">04</span>

            <div>

              <h3>Continuous Learning</h3>

              <p>
                Exploring modern technologies and improving
                through real-world projects.
              </p>

            </div>
          </div>
          </Reveal>

        </div>

      </div>

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