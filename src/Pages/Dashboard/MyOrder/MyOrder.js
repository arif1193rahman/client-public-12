import React, { useEffect, useState } from 'react';
import useAuth from '../../Hooks/useAuth';

const MyOrder = () => {
    const {user} = useAuth();
    const [totalOrders, setTotalOrders] = useState([]);

    useEffect(()=>{
        fetch(`http://localhost:5000/myOrders/${user.email}`)
        .then(res=>res.json())
        .then(data=> setTotalOrders(data))
    },[])
    return (
        <div>
            {
                totalOrders?.map(product=> <div>
                   <p>{product?.Name}</p>
                   <p>{product?.email}</p>
                   
                   
                </div>)
            }
        </div>
    );
};

export default MyOrder;