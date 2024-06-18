import React from "react";

function ContactForm() {
    return (
        <form className="form">
            <h2 className="contactMe">Contact Me</h2>
            <label className="Entername">Name</label>
            <input type="text" name="name" className="input" placeholder="Your Name" required />
            <label className="email">Email</label>
            <input type="email" name="email" className="input" placeholder="Your Email" required />
            <label className="message">Message</label>
            <textarea name="message" className="input message-input" placeholder="Your Message" required />
            <button type="submit" className="submit-button">Send</button>
        </form>
    );
}

export default ContactForm;
