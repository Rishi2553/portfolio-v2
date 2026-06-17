import { FaDownload } from "react-icons/fa";

function ResumeButton() {
  return (
    <div className="resume-download">
      <a
        href="/resume.pdf"
        download
        className="resume-btn"
      >
        <FaDownload />
        <span>Download Resume</span>
      </a>
    </div>
  );
}

export default ResumeButton;
