import BusTrackPlus from './BusTrackPlus';
import Portfolio from './Portfolio';
// import { motion } from 'framer-motion';
import Reveal from './Reveal';
import './Project.css';
function Project() {
  return (
    <div className="project-section">
      <h2 className="section-heading">Projects</h2>
      <Reveal direction="up">
        <BusTrackPlus />
      </Reveal>
      <Reveal direction="up">
        <Portfolio />
      </Reveal>
    </div>
  );
}

export default Project;