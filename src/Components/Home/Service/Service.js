import React, { useEffect, useState } from 'react';
import ServiceDetails from '../ServiceDetails/ServiceDetails';

const Service = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('https://still-hamlet-86672.herokuapp.com/destinations')
        .then(res => res.json())
        .then(data => setServices(data))
    },[] )
    return (

        <section>

            <div className='text-center mb-5 mt-5 py-5'>
                <h1>Our Most Popular Adventures Packages</h1>
            </div>

            <div className='row'>
                {
                    services.map(service => <ServiceDetails key={service._id} service={service}></ServiceDetails>)
                }
            </div>
        </section>
    );
};

export default Service;