import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './Booking.css';

const Booking = () => {
    const {bookingId} = useParams();
    const [product, setProduct] = useState([])

    // console.log(bookingId);

    useEffect(() => {
        fetch(`/sixService.json/${bookingId}`)
        .then(res=>res.json())
        .then(data=>console.log(data))
      },[]);
    //   console.log(product);
    console.log(product.name);
    return (
        <div>
            Booked : {product.name}
            {bookingId}
        </div>
        
    );
};

export default Booking;