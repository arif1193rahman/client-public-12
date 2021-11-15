import React from 'react';
import { Image } from 'react-bootstrap';
import './Banner.css';

const Banner = () => {
    return (
        <div>
             <div className="hero-image">
        <Image src="https://i.ibb.co/8dmHYQ4/maxresdefault-1.jpg" fluid />
      </div>
      <div className="hero-text">
        <h1 className="banner-text" style={{ fontSize: "50px" }}>
          Secure Your Property
        </h1>
        <p className="banner-second">We are here for your Security</p>
      </div>
        </div>
    );
};

export default Banner;