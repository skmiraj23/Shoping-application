import React, { useState } from 'react';
import './contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert('Message sent successfully!');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="contact-container">
      <div className="contact-card">
        <h2>Contact Us</h2>
        <p>We'd love to hear from you. Please fill out the form below.</p>

        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            value={formData.name}
            onChange={handleChange}
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            value={formData.email}
            onChange={handleChange}
          />

          <textarea
            name="message"
            rows="4"
            placeholder="Your Message"
            required
            value={formData.message}
            onChange={handleChange}
          />

          <button type="submit" className="submit-btn">Send Message</button>
        </form>
      </div>

      <div className="contact-info">
        <h3>Our Contact Details</h3>
        <p><strong>Email:</strong> support@mfashion.com</p>
        <p><strong>Phone:</strong> +1 (555) 123-4567</p>
        <p><strong>Address:</strong> 123 Fashion Street, New Town, Kolkata</p>
      </div>
    </div>
  );
};

export default Contact;
