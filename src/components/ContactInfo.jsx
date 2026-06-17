import {
    FaPhone,
    FaEnvelope,
    FaMapMarkerAlt,
    FaLinkedin,
    FaGithub
} from "react-icons/fa";

import { SiLeetcode } from "react-icons/si";

import ContactItem from "./ContactItem";
import Reveal from "./Reveal";

function ContactInfo() {
    return (
        <div className="contact-info-card">

            <h3>Contact Information</h3>

            
            <div className="contact-box">

                <Reveal  delay={0.2}>
                    <ContactItem icon={<FaPhone className="contact-icon" />}>
                        <span>9941796850</span>
                    </ContactItem>
                </Reveal>

                <Reveal  delay={0.4}>
                    <ContactItem icon={<FaEnvelope className="contact-icon" />}>
                        <a href="mailto:rishipanneerselvam@gmail.com">
                            rishipanneerselvam@gmail.com
                        </a>
                    </ContactItem>
                </Reveal>

                <Reveal  delay={0.6}>
                    <ContactItem icon={<FaMapMarkerAlt className="contact-icon" />}>
                        <a
                            href="https://maps.google.com/?q=Chennai,Tamil+Nadu,India"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Chennai, Tamil Nadu, India
                        </a>
                    </ContactItem>
                </Reveal>

                <Reveal  delay={0.8}>
                    <ContactItem icon={<FaLinkedin className="contact-icon" />}>
                        <a
                            href="https://www.linkedin.com/in/rishi-panneerselvam-325667218"
                            target="_blank"
                            rel="noreferrer"
                        >
                            LinkedIn
                        </a>
                    </ContactItem>
                </Reveal>

                <Reveal  delay={1.0}>
                    <ContactItem icon={<FaGithub className="contact-icon" />}>
                        <a
                            href="https://github.com/Rishi2553"
                            target="_blank"
                            rel="noreferrer"
                        >
                            GitHub
                        </a>
                    </ContactItem>
                </Reveal>

                <Reveal  delay={1.2}>
                    <ContactItem icon={<SiLeetcode className="contact-icon" />}>
                        <a
                            href="https://leetcode.com/u/Rishi2553/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            LeetCode
                        </a>
                    </ContactItem>
                </Reveal>

            </div>

        </div>
    );
}

export default ContactInfo;