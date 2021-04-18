import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

const ReviewDetails = ({review}) => {
    return (
        <div className='col-md-3 text-center shadow mb-5 '>
            <div className="card" >
                <div className="card-body">
                    <h5 className="card-title">{review.Name}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">{review.CompanyName}</h6>
                    <p className="card-text">{review.Details}</p>
                    <ul className='d-flex justify-content-center' style={{listStyle:'none', color:'gold'}}>
                        <li><FontAwesomeIcon icon={faStar} /></li>
                        <li><FontAwesomeIcon icon={faStar} /></li>
                        <li><FontAwesomeIcon icon={faStar} /></li>
                        <li><FontAwesomeIcon icon={faStar} /></li>
                        <li><FontAwesomeIcon icon={faStar} /></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default ReviewDetails;