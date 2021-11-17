import React, { useEffect, useState } from 'react';
import Services from '../Services/Services';
import './OurServices.css';




const OurServices = () => {
    const [services, setServices] = useState([])
   

        useEffect(()=>{
            fetch('http://localhost:5000/services')
            .then(res=>res.json())
            .then(data=> setServices(data))
        },[])
    return (
        <div className="total-card mt-5">
            <h2 className="customer-head">This is our <span>service</span></h2>
            <div className="row m-4">
                    {
                        services?.map(service=> <Services
                            service={service}
                            key={service._id}
                        ></Services>)
                    }
            </div>
        </div>
    );
};

export default OurServices;