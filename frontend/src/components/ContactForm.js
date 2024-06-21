import React, { useState } from "react";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch('http://localhost:4000/api/message', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    });
    setFormData({
      name: '',
    email: '',
    message: ''
    })
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }));
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h2 className="contactMe">Contact Me</h2>
      <label className="enterName">Name</label>
      <input
        type="text"
        name="name"
        className="input"
        placeholder="Your Name"
        required
        value={formData.name}
        onChange={handleInputChange}
      />
      <label className="email">Email</label>
      <input
        type="email"
        name="email"
        className="input"
        placeholder="Your Email"
        required
        value={formData.email}
        onChange={handleInputChange}
      />
      <label className="message">Message</label>
      <textarea
        name="message"
        className="input message-input"
        placeholder="Your Message"
        required
        value={formData.message}
        onChange={handleInputChange}
      />
      <button type="submit" className="submit-button">
        Send
      </button>
    </form>
  );
}

export default ContactForm;
