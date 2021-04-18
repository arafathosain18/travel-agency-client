import React, { useEffect, useState } from 'react';
import ReviewDetails from '../ReviewDetails/ReviewDetails';

const Review = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/reviews')
        .then(res => res.json())
        .then(data => setReviews(data))
    },[] )
    return (
        <section>

        <div className='text-center mb-5 mt-5 py-5'>
            <h1>Top Reviews</h1>
        </div>

        <div className='row'>
            {
                reviews.map(review => <ReviewDetails key={review._id} review={review}></ReviewDetails>)
            }
        </div>
    </section>
    );
};

export default Review;