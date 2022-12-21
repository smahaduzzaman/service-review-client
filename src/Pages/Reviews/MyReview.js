import React, { useEffect, useState } from 'react';

const MyReview = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch(`https://b6a11-service-review-server-side-smahaduzzaman.vercel.app/reviews`)
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])



    return (
        <div className='ml-20 my-10'>
            <h1 className='text-2xl mb-5 font-bold'>My Review</h1>
            {
                reviews.map(review => <li>{review.feedback}</li>)
            }
        </div>

    );
};

export default MyReview;