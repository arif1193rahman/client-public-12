import React from 'react';
import { Image } from 'react-bootstrap';
import './Banner.css';

const Banner = () => {
    return (
        <div>
             <div className="hero-image">
        <Image src="https://i.ibb.co/jhv31w9/tobias-tullius-4d-Ky7d3lk-KM-unsplash.jpg" fluid />
      </div>
      <div className="hero-text">
        <h1 className="banner-text" style={{ fontSize: "50px" }}>
          Secure Your Property
        </h1>
        <p className="banner-second">We are here for your Security</p>
        <p className="banner-third">2000+ people have put their trust in CCTV, How about you?</p>
      </div>
        </div>
    );
};

export default Banner;