import React from 'react';
import Marquee from 'react-fast-marquee';
import '../styles/CustomMarquee.css';

const marqueeText = [
  'Your Friendly Neighborhood Food Shop',
  'Fresh Ingredients, Fresh Food',
  'Your Neighborhood Friendly Food Shop',
  'Quality Food at Great Prices',
];

export default function CustomMarquee() {
  return (
    <div className="marquee-wrapper">
      <Marquee
        speed={100}
        gradient={false}
        direction="left"
        className="top-marquee"
      >
        {marqueeText.map((text, index) => (
          <h1 key={index} className="marquee-text">
            {text}
          </h1>
        ))}
      </Marquee>
      <Marquee
        speed={100}
        gradient={false}
        direction="right"
        className="middle-marquee"
      >
        {marqueeText.map((text, index) => (
          <h1 key={index} className="marquee-text">
            {text}
          </h1>
        ))}
      </Marquee>
      <Marquee
        speed={100}
        gradient={false}
        direction="left"
        className="bottom-marquee"
      >
        {marqueeText.map((text, index) => (
          <h1 key={index} className="marquee-text">
            {text}
          </h1>
        ))}
      </Marquee>
      <Marquee
        speed={100}
        gradient={false}
        direction="right"
        className="bottom-marquee-2"
      >
        {marqueeText.map((text, index) => (
          <h1 key={index} className="marquee-text">
            {text}
          </h1>
        ))}
      </Marquee>
    </div>
  );
}
