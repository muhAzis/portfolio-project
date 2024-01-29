import React from 'react';
import '../styles/Services.css';

interface Props {}

const Services: React.FC<Props> = () => {
  return (
    <div id="Services">
      <h2 className="services-title">
        <span>What</span> <span>services</span> <span>can</span> <span>I</span>
        <br />
        <span>offer</span> <span>to</span> <span>you</span> <span>as</span> <span>a</span>
        <br />
        <span>Web</span> <span>Developer</span>
      </h2>
    </div>
  );
};

export default Services;
