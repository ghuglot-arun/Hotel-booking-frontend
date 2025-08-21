import React, { useState } from 'react'
import { assets, facilityIcons, roomsDummyData } from '../assets/assets'
import { useNavigate } from 'react-router-dom'
import StarRating from '../components/StarRating'
import '../css/AllRooms.css' // Ensure this CSS file is included

const CheckBox = ({label, selected = false, onChange = () => {}}) =>{
    return (
        <label>
            <input type="checkbox" checked={selected} onChange={(e)=>onChange(e.target.checked,label)} />
            <span>{label}</span>
        </label>
    )
}
const RadioButton = ({label, selected = false, onChange = () => {}}) =>{
    return (
        <label>
            <input type="radio" name='sortOption' checked={selected} onChange={(e)=>onChange(label)} />
            <span>{label}</span>
        </label>
    )
}
const AllRooms = () => {
    const navigate = useNavigate()
    const [openFilters, setOpenFilters] = useState(false)
    const roomTypes = [
        "Single Bed",
        "Double Bed",
        "Luxury Room",
        "Family suite"
    ];
    const priceRange = [
        '0 to 500',
        '500 to 1000',
        '1000 to 2000',
        '2000 to 3000',
    ];
    const sortOption = [
        'Price Low to High',
        'Price High to Low',
        'Newest First'
    ];

    return (
        <div className="all-rooms-page">
            <div className="all-rooms-header">
                <h1>Hotel Rooms</h1>
                <p>Take advantage of our limited-time offers and special packages to enhance your stay and create unforgettable memories.</p>
            </div>

            <div className="all-rooms-content">
                {/* Left: Room Listings */}
                <div className="room-listings">
                    {roomsDummyData.map((room) => (
                        <div className="room-item" key={room._id}>
                            <img
                                src={room.images[0]}
                                alt="room"
                                className="room-image"
                                onClick={() => {
                                    navigate(`/rooms/${room._id}`)
                                    scrollTo(0, 0)
                                }}
                            />

                            <div className="room-details">
                                <p className="room-city">{room.hotel.city}, {room.hotel.country}</p>
                                <h2
                                    className="room-name"
                                    onClick={() => {
                                        navigate(`/rooms/${room._id}`)
                                        scrollTo(0, 0)
                                    }}
                                >
                                    {room.hotel.name}
                                </h2>

                                <div className="room-rating">
                                    <StarRating rating={room.rating || 4} />
                                    <span>200+ reviews</span>
                                </div>

                                <p className="room-address">
                                    <img src={assets.locationIcon} alt="location" /> {room.hotel.address}
                                </p>

                                <div className="room-amenities">
                                    <span>🛜 free wifi</span>
                                    <span>🍽️ free breakfast</span>
                                    <span>🛎️ room service</span>
                                </div>

                                <p className="room-price">${room.pricePerNight || 100} <span>/night</span></p>
                            </div>
                            

                        </div>
                    ))}
                </div>

               {/* Right: Filters */}
<div className="room-filters">
  <div className="filter-header">
    <p className="filter-title">FILTER</p>
    <button className="clear-btn">CLEAR</button>
  </div>

  <div className="filter-section">
    <p className="filter-label">Popular Filters</p>
    {roomTypes.map((room, index) => (
      <CheckBox key={index} label={room} />
    ))}
  </div>

  <div className="filter-section">
    <p className="filter-label">Price Range</p>
    {priceRange.map((range, index) => (
      <CheckBox key={index} label={`$ ${range}`} />
    ))}
  </div>

  <div className="filter-section">
    <p className="filter-label">Sort By</p>
    {sortOption.map((option, index) => (
      <RadioButton key={index} label={option} />
    ))}
  </div>
</div>

            </div>
        </div>
    )
}

export default AllRooms
