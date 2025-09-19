import React, { useState } from "react";
import "../css/Contact.css";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can send data to a backend or email service
    setSubmitted(true);
  };

  return (
    <section className="contact-section">
      <div className="contact-container">
        {/* Left side: Info */}
        <div className="contact-info">
          <h2>Contact Us</h2>
          <p>
            Have questions or need assistance with your booking?
            Reach out to us and we’ll be happy to help.
          </p>
          <ul>
            <li><strong>Address:</strong> 123 Beach Road, Goa, India</li>
            <li><strong>Phone:</strong> +91 98765 43210</li>
            <li><strong>Email:</strong> reservations@yourhotel.com</li>
          </ul>
        </div>

        {/* Right side: Form */}
        {submitted ? (
          <div className="thank-you">Thank you! We’ll get back to you soon.</div>
        ) : (
          <form className="contact-form" onSubmit={handleSubmit}>
            <label>
              Name
              <input type="text" name="name" placeholder="Your Name" required />
            </label>
            <label>
              Email
              <input type="email" name="email" placeholder="you@example.com" required />
            </label>
            <label>
              Message
              <textarea name="message" placeholder="Write your message..." rows="5" required />
            </label>
            <button type="submit">Send Message</button>
          </form>
        )}
      </div>
    </section>
  );
}
