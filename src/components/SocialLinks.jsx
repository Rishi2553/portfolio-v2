import {
  FaGithub,
  FaLinkedin,
  FaEnvelope
} from "react-icons/fa";
import './SocialLinks.css';

import { SiLeetcode } from "react-icons/si";

function SocialLinks() {
  return (
    <div className="social-links">

      <a
        href="https://github.com/Rishi2553"
        target="_blank"
        rel="noreferrer"
        className="social-icon"
      >
        <FaGithub />
        <span className="tooltip">GitHub</span>
      </a>

      <a
        href="https://www.linkedin.com/in/rishi-panneerselvam-325667218"
        target="_blank"
        rel="noreferrer"
        className="social-icon"
      >
        <FaLinkedin />
        <span className="tooltip">LinkedIn</span>
      </a>

      <a
        href="https://leetcode.com/u/Rishi2553/"
        target="_blank"
        rel="noreferrer"
        className="social-icon"
      >
        <SiLeetcode />
        <span className="tooltip">LeetCode</span>
      </a>

      <a
        href="mailto:rishipanneerselvam@gmail.com"
        className="social-icon"
      >
        <FaEnvelope />
        <span className="tooltip">Email</span>
      </a>

    </div>
  );
}

export default SocialLinks;