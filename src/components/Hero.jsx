import React from 'react';
import hero_img from "../assets/heroImage.png";
import '../css/Hero.css';
import { FaSearch, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';

const Hero = () => {
    const cities = ["Mumbai", "Delhi", "Bangalore", "Chennai", "Kolkata"];

  return (
    <div className='hero'>
      <img src={hero_img} alt="Hotel background" className='background-img' />
      
      <div className='hero-content'>
        <p className='hero-subtitle'>The Ultimate Hotel Experience</p>
        <h1 className='hero-title'>Discover Your Perfect Getaway Destination</h1>
        <p className='hero-description'>
          Unparalleled luxury and comfort await at the world's most exclusive hotels and resorts. Start your journey today.
        </p>

         
     <form className="booking-form">
  {/* Destination */}
  <div className="form-group">
    <label htmlFor="destination">Destination</label>
    <div className="input-icon-wrapper">
      <FaMapMarkerAlt className="icon" />
      <input type="text" id="destination" placeholder="Destination" />
    </div>
  </div>

  {/* Check-in */}
  <div className="form-group">
    <label htmlFor="checkin">Check-In</label>
    <div className="input-icon-wrapper">
      <FaCalendarAlt className="icon" />
      <input type="date" id="checkin" />
    </div>
  </div>

  {/* Check-out */}
  <div className="form-group">
    <label htmlFor="checkout">Check-Out</label>
    <div className="input-icon-wrapper">
      <FaCalendarAlt className="icon" />
      <input type="date" id="checkout" />
    </div>
  </div>

  {/* Guests */}
  <div className="form-group">
    <label htmlFor="guests">Guests</label>
    <input type="number" id="guests" min="1" placeholder="Guests" />
  </div>

  {/* Search Button */}
  <div className="form-group full-width">
    <button type="submit" className="search-btn">
      <FaSearch className="icon" /> Search
    </button>
  </div>
</form>

      </div>
    </div>
  );
};

export default Hero;
