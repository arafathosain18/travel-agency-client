import React from 'react';
import { Link } from 'react-router-dom';
import style from '../ServiceDetails/ServiceDetails.css';


const ServiceDetails = ({service}) => {
    return (
        <div className='zoom col-md-3 text-center'>
            <div className="card text-white bg-dark mt-5 ms-5" style={{maxWidth: '20rem'}}>
                <div className="card-header">Explore</div>
                <div className="card-body">
                    <h5 className="card-title">{service.Name}</h5>
                    <p className="card-text">{service.Details}</p>
                    <h5 className='text-warning'>{service.Days} Days</h5>
                    <h5>{service.Price}$</h5><br/>
                    <Link to={'/paymant/'+service._id}><button className='btn btn-warning'>Book Now</button></Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;