import React from 'react'
import { assets, cities } from '../assets/assets'
import '../css/HotelReg.css'

const HotelReg = () => {
  return (
    <div className="hotel-reg-container">
      <div className="hotel-reg-card">
        <form>
          <img src={assets.regImage} alt="regImage" className="reg-image" />

          <img src={assets.closeIcon} alt="closeIcon" className="hotel-reg-close" />

          <div className="hotel-reg-body">
            <p className="title">Register Your Hotel</p>

            <div>
              <label htmlFor="name">Hotel Name</label>
              <input id="name" type="text" placeholder="Type here" required />
            </div>

            <div>
              <label htmlFor="contact">Phone</label>
              <input id="contact" type="text" placeholder="Type here" required />
            </div>

            <div>
              <label htmlFor="address">Address</label>
              <input id="address" type="text" placeholder="Type here" required />
            </div>

            <div>
              <label htmlFor="city">City</label>
              <select id="city" required>
                <option value="">Select City</option>
                {cities.map(city => (
                  <option key={city} value={city}>{city}</option>
                ))}
              </select>
            </div>

            <button type="submit">Register</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default HotelReg
