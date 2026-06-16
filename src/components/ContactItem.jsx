function ContactItem({ icon, children }) {
    return (
        <div className="contact-item">
            {icon}
            {children}
        </div>
    );
}

export default ContactItem;