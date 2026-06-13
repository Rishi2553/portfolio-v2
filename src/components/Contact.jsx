import { useState } from "react";
import emailjs from "@emailjs/browser";
import phoneLogo from "../assets/logo/phone.png";
import mailLogo from "../assets/logo/mail.png";
import locationLogo from "../assets/logo/location.png";
import linkedinLogo from "../assets/logo/linkedin.png";
import githubLogo from "../assets/logo/github.png";
import leetcodeLogo from "../assets/logo/leetcode.png";
import "./Contact.css";

function Contact() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [sending, setSending] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.message.trim()
    ) {
      alert("Please fill all fields");
      return;
    }

    setSending(true);

    emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message
      },
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
      .then(() => {
        alert("Message sent successfully!");

        setFormData({
          name: "",
          email: "",
          message: ""
        });
      })
      .catch(() => {
        alert("Failed to send message.");
      })
      .finally(() => {
        setSending(false);
      });
  };

  return (
    <section className="contact-section">

      <h2>Contact Me</h2>

      <div className="contact-container">

        <div className="contact-form-card">

          <h3>Send Me a Message</h3>

          <form onSubmit={sendEmail}>

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
            />

            <textarea
              rows="6"
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
            />

            <button type="submit" disabled={sending}>
              {sending ? "Sending..." : "Send Message"}
            </button>

          </form>

        </div>

        <div className="contact-info-card">

          <h3>Contact Information</h3>

          <div className="contact-box">

            <div className="contact-item">
              <img className="contact-logo" src={phoneLogo} alt="Phone" />
              <span>9941796850</span>
            </div>

            <div className="contact-item">
              <img className="contact-logo" src={mailLogo} alt="Email" />
              <a href="mailto:rishipanneerselvam@gmail.com">
                rishipanneerselvam@gmail.com
              </a>
            </div>

            <div className="contact-item">
              <img className="contact-logo" src={locationLogo} alt="Location" />
              <span>Chennai, Tamil Nadu</span>
            </div>

            <div className="contact-item">
              <img className="contact-logo" src={linkedinLogo} alt="LinkedIn" />
              <a
                href="https://www.linkedin.com/in/rishi-panneerselvam-325667218"
                target="_blank"
                rel="noreferrer"
              >
                Rishi Panneerselvam
              </a>
            </div>

            <div className="contact-item">
              <img className="contact-logo" src={githubLogo} alt="GitHub" />
              <a
                href="https://github.com/Rishi2553"
                target="_blank"
                rel="noreferrer"
              >
                Rishi2553
              </a>
            </div>

            <div className="contact-item">
              <img className="contact-logo" src={leetcodeLogo} alt="LeetCode" />
              <a
                href="https://leetcode.com/u/Rishi2553/"
                target="_blank"
                rel="noreferrer"
              >
                Rishi2553
              </a>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Contact;