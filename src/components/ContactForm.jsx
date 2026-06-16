import { useState } from "react";
import emailjs from "@emailjs/browser";

function ContactForm() {

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
        <div className="contact-form-card">

            <h3>Let's Connect</h3>

            <p className="contact-description">
                Thank you for visiting my portfolio. If you'd like to discuss a
                project, explore collaboration opportunities, or simply say hello,
                feel free to send me a message. I'll get back to you as soon as possible.
            </p>

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

                <button
                    type="submit"
                    disabled={sending}
                >
                    {sending ? "Sending..." : "Send Message"}
                </button>

            </form>

        </div>
    );
}

export default ContactForm;