import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { assets, facilityIcons, roomsDummyData, roomCommonData } from '../assets/assets';
import StarRating from '../components/StarRating';
import '../css/RoomDetail.css';

const RoomDetail = () => {
  const { id } = useParams();
  const [room, setRoom] = useState(null);
  const [mainImage, setMainImage] = useState(null);

  useEffect(() => {
    const found = roomsDummyData.find(r => r._id === id);
    if (found) {
      setRoom(found);
      setMainImage(found.images[0]);
    }
  }, [id]);

  if (!room) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    // handle booking / availability check
    alert('Checking availability...');
  };

  return (
    <div className="room-detail page-container">

      {/* header */}
      <div className="room-header">
        <div>
          <h1 className="room-title">{room.hotel.name} <span className="room-type">({room.roomType})</span></h1>
          <div className="meta-line">
            <div className="rating-inline">
              <StarRating rating={room.rating || 4} />
              <span className="reviews">200+ reviews</span>
            </div>
            <div className="address-inline">
              <img src={assets.locationIcon} alt="location" className="address-icon" />
              <span>{room.hotel.address}</span>
            </div>
          </div>
        </div>
        <div className="discount-badge">20% OFF</div>
      </div>

      {/* images area */}
      <div className="images-wrapper">
        <div className="main-image">
          <img src={mainImage} alt="Main room" />
        </div>

        <div className="thumb-grid">
          {room.images.map((img, i) => (
            <div
              key={i}
              className={`thumb-item ${mainImage === img ? 'active' : ''}`}
              onClick={() => setMainImage(img)}
            >
              <img src={img} alt={`thumb-${i}`} />
            </div>
          ))}
        </div>
      </div>

      {/* booking card (full width below images) */}
      

      {/* details section (amenities left, price right) */}
      <div className="room-details-section">
        <div className="details-left">
          <h2 className="section-heading">Experience Luxury Like Never Before</h2>
          <aside className="details-right">
          <div className="price-box">
            <p className="price-amount">${room.pricePerNight}</p>
            <p className="price-unit">/night</p>
          </div>
        </aside>
          {/* amenity badges */}
          <div className="amenity-badges">
            {room.amenities.map((a, i) => (
              <div className="amenity-badge" key={i}>
                <img src={facilityIcons[a]} alt={a} />
                <span>{a}</span>
              </div>
            ))}
          </div>
          <div className="booking-card">
        <form className="booking-form" onSubmit={handleSubmit}>
          <div className="booking-row">
            <div className="form-group">
              <label>Check-In</label>
              <input type="date" id="checkInDate" required />
            </div>

            <div className="divider" />

            <div className="form-group">
              <label>Check-Out</label>
              <input type="date" id="checkOutDate" required />
            </div>

            <div className="divider" />

            <div className="form-group small">
              <label>Guests</label>
              <input type="number" id="guests" min="1" defaultValue={1} required />
            </div>

            <div className="btn-wrapper">
              <button type="submit" className="btn-primary">Check Availability</button>
            </div>
          </div>
        </form>
      </div>

          {/* Room common info list */}
          <div className="room-common-list">
            {roomCommonData.map((item, idx) => (
              <div className="common-item" key={idx}>
                <img src={item.icon} alt={item.title} />
                <div>
                  <p className="common-title">{item.title}</p>
                  <p className="common-desc">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        
      </div>

    </div>
  );
};

export default RoomDetail;
