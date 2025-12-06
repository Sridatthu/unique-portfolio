import React from 'react';

const IndiaFlag = ({ width = 900, height = 600, className = "" }) => {
  // Center coordinates for the Chakra
  const cx = 450;
  const cy = 300;
  const radius = 90; // Approx 20% of width/3

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 900 600"
      width={width}
      height={height}
      className={className}
      aria-label="Flag of India"
    >
      {/* Top Band: Saffron */}
      <rect width="900" height="200" fill="#FF9933" />
      
      {/* Middle Band: White */}
      <rect y="200" width="900" height="200" fill="#FFFFFF" />
      
      {/* Bottom Band: Green */}
      <rect y="400" width="900" height="200" fill="#138808" />

      {/* Ashoka Chakra */}
      <g transform={`translate(${cx}, ${cy})`}>
        {/* Outer Ring */}
        <circle r={radius} fill="none" stroke="#000080" strokeWidth="15" />
        
        {/* Inner Hub */}
        <circle r={radius * 0.2} fill="#000080" />

        {/* 24 Spokes */}
        {[...Array(24)].map((_, i) => (
          <line
            key={i}
            x1="0"
            y1="0"
            x2="0"
            y2={-radius}
            stroke="#000080"
            strokeWidth="8"
            transform={`rotate(${i * 15})`} // 360deg / 24 spokes = 15deg
          />
        ))}
      </g>
    </svg>
  );
};

export default IndiaFlag;