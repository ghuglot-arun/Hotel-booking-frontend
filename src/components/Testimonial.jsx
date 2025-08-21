import React from 'react';
import { testimonials } from '../assets/assets';
import Title from './Title';
import StarRating from './StarRating';
import '../css/TestimonialSection.css'; // Make sure this file exists

const TestimonialSection = () => {
  return (
    <div className="testimonial-section">
      <Title
        title="What our Guests Say"
        subTitle="Discover why discerning travelers consistently choose AG Booking for their exclusive and luxurious accommodation around the world."
      />
      <div className="testimonial-grid">
        {testimonials.map((testimonial) => (
          <div className="testimonial-card" key={testimonial.id}>
            <div className="testimonial-header">
             <img
  src={testimonial.image}
  alt={testimonial.name}
  className="testimonial-avatar"
/>
              <div>
                <p className="testimonial-name">{testimonial.name}</p>
                <p className="testimonial-address">{testimonial.address}</p>
              </div>
            </div>
            <div className="testimonial-rating">
              <StarRating rating={testimonial.rating} />
            </div>
            <p className="testimonial-desc">{testimonial.review}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialSection;
