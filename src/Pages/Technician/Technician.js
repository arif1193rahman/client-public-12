import React from "react";
import "./Technician.css";

const Technician = () => {
  return (
    <div className="m-4">
      <h4 className="technician-one">OUR EXPERT WORKER</h4>
      <h1 className="technician-two">
        Our <span>Special Expert</span> Team
      </h1>
      <div className="row technician-image">
        <div className="col-md-4">
          <img
            src="
https://i.ibb.co/DMDpFY6/Professional-cctv-technician-working.jpg"
            alt=""
          />
          <div className="manager">
            <h6>James Williams</h6>
            <p>Marketing Manager</p>
          </div>
        </div>
        <div className="col-md-4">
          <img
            src="https://i.ibb.co/N7W1TMc/depositphotos-96917332-stock-photo-technician-fixing-an-hot-water.jpg
"
            alt=""
          />
          <div className="manager fixer">
            <h6>Richard Mellissa</h6>
            <p>Camera Fixer</p>
          </div>
        </div>
        <div className="col-md-4">
          <img
            src="https://i.ibb.co/jT9q2ts/photo-1621905251918-48416bd8575a.jpg"
            alt=""
          />
          <div className="manager sale-manager">
            <h6>Matthew Smith</h6>
            <p>Sale Manager</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Technician;
