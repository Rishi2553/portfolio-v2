import { FaDownload } from "react-icons/fa";
import Reveal from "./Reveal";

function ResumeButton() {
  return (
    <Reveal direction="up" delay={0.8}>
    <div className="resume-download">
      <a
        href="/Rishi.pdf"
        download
        className="resume-btn"
      >
        <FaDownload />
        <span>Download Resume</span>
      </a>
    </div>
    </Reveal>
  );
}

export default ResumeButton;
