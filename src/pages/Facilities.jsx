import React from "react";
import '../css/Facilities.css';

const facilitiesList = [
  { icon: "🛏️", title: "Comfortable Rooms", desc: "Spacious, well-furnished rooms with premium bedding." },
  { icon: "🍽️", title: "Restaurant & Bar", desc: "Multi-cuisine dining and a full-service lounge." },
  { icon: "🏊", title: "Swimming Pool", desc: "Outdoor pool with lounge area and refreshments." },
  { icon: "💻", title: "Free Wi-Fi", desc: "High-speed internet across all areas of the property." },
  { icon: "🚗", title: "Parking", desc: "Secure on-site parking for all guests." },
  { icon: "🧖", title: "Spa & Wellness", desc: "Relaxing spa treatments and fitness center." },
];

export default function Facilities() {
  return (
    <section className="facilities">
      <h2 className="facilities-heading">Our Facilities</h2>
      <p className="facilities-subtitle">
        Everything you need for a comfortable and memorable stay.
      </p>
      <div className="facilities-grid">
        {facilitiesList.map((f, idx) => (
          <div className="facility-card" key={idx}>
            <span className="facility-icon">{f.icon}</span>
            <h3>{f.title}</h3>
            <p>{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
