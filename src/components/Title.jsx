import React from 'react';

const Title = ({ title, subTitle, align = 'center', font = '2.5rem' }) => {
  return (
    <div style={{ textAlign: align, marginBottom: '2rem' }}>
      <h1
        style={{
          fontSize: font,
          fontWeight: '700',
          marginBottom: '0.5rem',
          color: '#111',
          letterSpacing: '0.5px',
        }}
      >
        {title}
      </h1>
      <p
        style={{
          fontSize: '1rem',
          color: '#555',
          maxWidth: '700px',
          margin: '0 auto',
          lineHeight: '1.6',
        }}
      >
        {subTitle}
      </p>
    </div>
  );
};

export default Title;
