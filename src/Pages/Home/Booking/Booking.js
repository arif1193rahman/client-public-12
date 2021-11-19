import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import { useForm } from "react-hook-form";
import "./Booking.css";
import Header from "../Header/Header";

const Booking = () => {
  const { user,} = useAuth();
  console.log(user, 'user information');
  const { bookingId } = useParams();
  const [product, setProduct] = useState([]);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    fetch(`https://polar-oasis-62677.herokuapp.com/services`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log("submit", result);
        if (result.insertedId) {
          alert("Yehhh , Your Order Is confirm");
          reset();
        }
      });
  };
  

  useEffect(() => {
      fetch(`https://polar-oasis-62677.herokuapp.com/services/${bookingId}`)
      .then(res=>res.json())
      .then(data=>setProduct(data))
    },[bookingId]);
  return (
    <div>
      <Header></Header>
      <div className="row m-5">
      <div className="col-lg-6 col-sm-12">
        <h2>Confirm Your Order...</h2>
        <h1>To</h1>
        <p className="booking-section">
          <u>{product?.brand}</u>
        </p>
        <p>{product?.overview}</p>
      </div>

      <div className="col-lg-6 col-sm-12">
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            className="p-2 m-2"
            //  placeholder="Name"
            defaultValue={user?.displayName}
            {...register("Name")}
          />
          <input
            className="p-2 m-2"
             placeholder="Name"
            defaultValue={user?.email}
            {...register("email")}
          />
          <input
            type="text"
            className="p-2 m-2"
             defaultValue={product?.brand}
            placeholder="+880"
            {...register("name")}
          />
          <input
            type="number"
            className="p-2 m-2"
             defaultValue={product?.price}
            {...register("price")}
          />

          <br />

          <input
            type="text"
            className="p-2 m-2"
            placeholder="Your City"
            {...register("city", { required: true })}
          />
          <br />

          {errors.exampleRequired && <span>This field is required</span>}

          <input
            className="w-50 mx-auto px-3 py3 bg-secondary fw-bold fs-5  text-white btn "
            type="submit"
          />
        </form>
      </div>
    </div>
    </div>
  );
};

export default Booking;
