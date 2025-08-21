import React from 'react';
import '../css/Newsletter.css';

const Newsletter = () => {
  return (
    <div id='newsletter' className="newsletter">
      <div className="newsletter-content">
        <h2>Subscribe to Our Newsletter</h2>
        <p>Get the latest updates, offers, and more directly to your inbox.</p>
        <form className="newsletter-form">
          <input type="email" placeholder="Enter your email" required />
          <button type="submit">Subscribe</button>
        </form>
      </div>
    </div>
  );
};

export default Newsletter;
