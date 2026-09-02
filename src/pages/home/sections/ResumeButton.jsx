import { FaDownload } from "react-icons/fa";
import Reveal from "../../../components/Reveal";
import { trackEvent } from "../../../utils/analytics";

function ResumeButton() {
  return (
    <Reveal direction="up" delay={0.5}>
      <div className="resume-download">
        <a
          href="/Rishi.pdf"
          download
          target="_blank"
          className="resume-btn"
          onClick={(e) => {
            e.preventDefault();

            trackEvent("resume_download");

            setTimeout(() => {
              window.location.href = "/Rishi.pdf";
            }, 300);
          }}
        >
          <FaDownload />
          <span>Download Resume</span>
        </a>
      </div>
    </Reveal>
  );
}

export default ResumeButton;
