import React from "react";
import { Link } from "react-router-dom";
import './Services.css';

const Services = ({service}) => {
  const { brand, overview, _id, img, price } = service;
console.log(service);
  return (
    <div className="col-lg-6 image">
      <h3 className="service-name">{brand}</h3>
      <p>{overview}</p>
      <p>Price: ${price}</p>
      <img src={img} alt="" />
      <Link to={`/services/${_id}`}>
        <button className="btn btn-warning mt-3">Buy</button>
      </Link>
    </div>
  );
};

export default Services;
