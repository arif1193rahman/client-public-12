import React, { useEffect, useState } from 'react';

const Explore = () => {
    const [explores, setExplore] = useState([]);

    useEffect(()=>{
        fetch('/tenService.json')
        .then(res=>res.json())
        .then(data=> setExplore(data))
    },[])
    // console.log(explores);
    return (
        <div className="total-card mt-5">
        <h2 className="customer-head">This is our <span>service</span></h2>
        <div className="row m-4">
                {/* {
                    explores?.map(explore=> <singleExplore>
                        explore={explore}
                        key={explore.id}
                    </singleExplore>)
                } */}
        </div>
    </div>
    );
};

export default Explore;