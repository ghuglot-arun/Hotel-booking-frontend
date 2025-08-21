import React from 'react'
import Title from './Title'
import { assets, exclusiveOffers } from '../assets/assets'
import '../css/ExclusiveOffers.css'

const ExclusiveOffers = () => {
  return (
    <div className="exclusive-container">
      {/* Header */}
      <div className="exclusive-header">
        <div className="exclusive-title-wrapper">
          <Title
            align="left"
            title="Exclusive Offers"
            subTitle="Take advantage of our limited-time offers and special packages to enhance your stay and create unforgettable memories."
          />
        </div>
        <button className="exclusive-view-btn">
          View All Offers
          <img src={assets.arrowIcon} alt="arrow-icon" />
        </button>
      </div>

      {/* Offer Cards */}
    <div className="exclusive-grid">
  {exclusiveOffers.map((item) => (
    <div
      key={item._id}
      className="exclusive-card"
      style={{ backgroundImage: `url(${item.image})` }}
    >
      <span className="exclusive-discount">{item.priceOff}% OFF</span>
      <div className="exclusive-content">
        <h3>{item.title}</h3>
        <p>{item.description}</p>
        <p>Expires {item.expiryDate}</p>
        <button>
          View Offer <img src={assets.arrowIcon} alt="arrow-icon" />
        </button>
      </div>
    </div>
  ))}
</div>

    </div>
  )
}

export default ExclusiveOffers
