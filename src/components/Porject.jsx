import BusTrackPlus from './BusTrackPlus';
import Portfolio from './Portfolio';
import {motion} from 'framer-motion';
import './Project.css';
function Project() {
  return (
    <div className="project-section">
      <h2 className="section-heading">Projects</h2>
      <motion.div
        initial={{ opacity:0, x:-100 }}
        whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
      >
        <BusTrackPlus />
      </motion.div>
      <motion.div
        initial={{ opacity:0, x:100 }}
        whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
      >
        <Portfolio />
      </motion.div>
    </div>
  );
}

export default Project;