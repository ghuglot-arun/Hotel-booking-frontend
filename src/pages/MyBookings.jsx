import React, { useState } from 'react';
import Title from '../components/Title';
import { assets, userBookingsDummyData } from '../assets/assets';
import '../css/MyBookings.css';

const MyBookings = () => {
  const [bookings] = useState(userBookingsDummyData);

  return (
    <div className="my-bookings">
      <Title
        title="My Bookings"
        subTitle="Easily manage your past, current, and upcoming hotel reservations in one place. Plan your trip seamlessly with just a few clicks"
      />

      <div className="bookings-table">
        {/* Table Header */}
        <div className="table-header">
          <div>Hotels</div>
          <div>Date & Timings</div>
          <div>Payment</div>
        </div>

        {/* Table Rows */}
        {bookings.map((booking) => (
          <div className="table-row" key={booking._id}>
            {/* Hotel Info */}
            <div className="hotel-info">
              <img src={booking.room.images[0]} alt="Room" className="hotel-img" />
              <div>
                <p className="hotel-name">
                  {booking.hotel.name} <span>({booking.room.roomType})</span>
                </p>
                <div className="hotel-meta">
                  <img src={assets.locationIcon} alt="Location" className="icon-small" />
                  <span>{booking.hotel.address}</span>
                </div>
                <div className="hotel-meta">
                  <img src={assets.guestsIcon} alt="Guests" className="icon-small" />
                  <span>Guests: {booking.guests}</span>
                </div>
                <p className="total-price">Total: ${booking.totalPrice}</p>
              </div>
            </div>

            {/* Date & Timings */}
            <div className="date-info">
              <p>
                <strong>Check-In:</strong>
                <br />
                {new Date(booking.checkInDate).toDateString()}
              </p>
              <p>
                <strong>Check-Out:</strong>
                <br />
                {new Date(booking.checkOutDate).toDateString()}
              </p>
            </div>

            {/* Payment Status */}
            <div className="payment-status">
              <span className={`status-dot ${booking.isPaid ? 'paid' : 'unpaid'}`}></span>
<span>{booking.isPaid ? 'Paid' : 'Unpaid'}</span>
            </div>
            {!booking.isPaid && (
              <button>
                Pay Now
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyBookings;
