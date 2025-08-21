import React from 'react';
import { assets } from '../assets/assets';

const StarRating = ({ rating = 0 }) => {
  return (
    <>
      {Array(5).fill('').map((_, index) => (
        <img
          key={index}
          src={rating > index ? assets.starIconFilled : assets.starIconOutlined}
          alt="star-icon"
          style={{ width: '16px', height: '16px', marginRight: '2px' }}
        />
      ))}
    </>
  );
};

export default StarRating;
