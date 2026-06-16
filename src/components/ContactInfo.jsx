import {
    FaPhone,
    FaEnvelope,
    FaMapMarkerAlt,
    FaLinkedin,
    FaGithub
} from "react-icons/fa";

import { SiLeetcode } from "react-icons/si";

import ContactItem from "./ContactItem";

function ContactInfo() {
    return (
        <div className="contact-info-card">

            <h3>Contact Information</h3>

            <div className="contact-box">

                <ContactItem icon={<FaPhone className="contact-icon" />}>
                    <span>9941796850</span>
                </ContactItem>

                <ContactItem icon={<FaEnvelope className="contact-icon" />}>
                    <a href="mailto:rishipanneerselvam@gmail.com">
                        rishipanneerselvam@gmail.com
                    </a>
                </ContactItem>

                <ContactItem icon={<FaMapMarkerAlt className="contact-icon" />}>
                    <a
                        href="https://maps.google.com/?q=Chennai,Tamil+Nadu,India"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Chennai, Tamil Nadu, India
                    </a>
                </ContactItem>

                <ContactItem icon={<FaLinkedin className="contact-icon" />}>
                    <a
                        href="https://www.linkedin.com/in/rishi-panneerselvam-325667218"
                        target="_blank"
                        rel="noreferrer"
                    >
                        LinkedIn
                    </a>
                </ContactItem>

                <ContactItem icon={<FaGithub className="contact-icon" />}>
                    <a
                        href="https://github.com/Rishi2553"
                        target="_blank"
                        rel="noreferrer"
                    >
                        GitHub
                    </a>
                </ContactItem>

                <ContactItem icon={<SiLeetcode className="contact-icon" />}>
                    <a
                        href="https://leetcode.com/u/Rishi2553/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        LeetCode
                    </a>
                </ContactItem>

            </div>

        </div>
    );
}

export default ContactInfo;