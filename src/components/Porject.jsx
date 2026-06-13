import BusTrackPlus from './BusTrackPlus';
import Portfolio from './Portfolio';
import './Project.css';
function Project() {
  return (
    <div className="project-section">
      <h2 className="section-heading">Projects</h2>
        <BusTrackPlus />
        <Portfolio />
    </div>
  );
}

export default Project;