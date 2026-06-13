import AboutMe from './About-me';
import Skill from './Skill';
import Project from './Porject';
import CareerJourney from './CareerJourney';
import Contact from './Contact';

function MainContent() {
  return (
    <main className="content">

      <section id="about">
        <AboutMe />
      </section>

      <section id="skills">
        <Skill />
      </section>

      <section id="projects">
        <Project />
      </section>

      <section id="career">
        <CareerJourney />
      </section>

      <section id="contact">
        <Contact />
      </section>

    </main>
  );
}

export default MainContent;