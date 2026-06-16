import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";
import './Contact.css';


function Contact() {


  return (
    <section className="contact-section">

      <h2>Contact Me</h2>

      <div className="contact-container">
        <ContactForm />
        <ContactInfo />


      </div>

    </section>
  );
}

export default Contact;