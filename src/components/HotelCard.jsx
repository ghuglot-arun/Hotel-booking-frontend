import React from 'react';
import { Link } from 'react-router-dom';
import { assets } from '../assets/assets';
import '../css/HotelCard.css';

const HotelCard = ({ room, index }) => {
  return (
    <Link to={`/rooms/${room._id}`} onClick={() => scrollTo(0, 0)} className="hotel-card">
      <div className="hotel-card-img-wrapper">
        <img src={room.images[0]} alt="Hotel" className="hotel-card-img" />
        {index % 2 === 0 && <span className="hotel-badge">Best Seller</span>}
      </div>

      <div className="hotel-card-details">
        <div className="hotel-header">
          <p className="hotel-name">{room.hotel.name}</p>
          <div className="hotel-rating">
            <img src={assets.starIconFilled} alt="Star" />
            <span>4.5</span>
          </div>
        </div>

        <div className="hotel-location">
          <img src={assets.locationIcon} alt="Location" />
          <span>{room.hotel.address}</span>
        </div>

        <div className="hotel-bottom">
          <p className="hotel-price">${room.pricePerNight} <span>/night</span></p>
          <button className="book-now-btn">Book Now</button>
        </div>
      </div>
    </Link>
  );
};

export default HotelCard;
