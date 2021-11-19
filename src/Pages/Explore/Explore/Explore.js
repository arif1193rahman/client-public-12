import React, { useEffect, useState } from 'react';
import Header from '../../Home/Header/Header';
import ExploreAll from '../ExploreAll/ExploreAll';

const Explore = () => {
    const [explores, setExplore] = useState([]);

    useEffect(()=>{
        fetch('https://polar-oasis-62677.herokuapp.com/explore')
        .then(res=>res.json())
        .then(data=> setExplore(data))
    },[])
    // console.log(explores);
    return (
        <div>
            <Header></Header>
            <div className="total-card mt-5">
        <h2 className="customer-head">This is our <span>service</span></h2>
        <div className="row m-4">
                {
                   explores.map(explore=> <ExploreAll
                   explore={explore}
                   >

                   </ExploreAll>)
                }
        </div>
    </div>
        </div>
    );
};

export default Explore;