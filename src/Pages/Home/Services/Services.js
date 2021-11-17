import React from "react";
import { Link } from "react-router-dom";
import './Services.css';

const Services = ({service}) => {
  const { name, details, _id, img, price } = service;
console.log(service);
  return (
    <div className="col-lg-6 image">
      <h3 className="service-name">{name}</h3>
      <p>{details}</p>
      <p>Price: ${price}</p>
      <img src={img} alt="" />
      <Link to={`/services/${_id}`}>
        <button className="btn btn-warning mt-3">Buy</button>
      </Link>
    </div>
  );
};

export default Services;
