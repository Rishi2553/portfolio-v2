import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";
import Reveal from "./Reveal";
import './Contact.css';


function Contact() {


  return (
    <section className="contact-section">
      <Reveal direction="up">

        <h2>Contact Me</h2>
      </Reveal>
      <div className="contact-container">
        <Reveal direction="up" delay={0.6}>
          <ContactForm />
        </Reveal>
        <Reveal direction="up" delay={0.2}>
          <ContactInfo />
        </Reveal>


      </div>
    </section>
  );
}

export default Contact;