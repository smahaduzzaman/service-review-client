
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Review from './Review';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/reviews`)
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])

    return (
        <div className="flex flex-col w-full mx-auto py-10 p-6 space-y-4 sm:p-10 dark:bg-gray-900 dark:text-gray-100">
            <h2 className="text-xl font-semibold">Your Feedback</h2>
            <ul className="flex flex-col divide-y divide-gray-700 p-10">
                {
                    reviews.map(review => <Review
                        key={review._id}
                        review={review}
                    ></Review>)
                }
            </ul>
            <div className="space-y-1 text-right">
                <p>Total Feedback:
                    <span className="font-semibold mx-3">{reviews.length}</span>
                </p>
                <p className="text-sm dark:text-gray-400">Wonderfull! This site acheive preety much feedbacks from VIP's.</p>
            </div>
            <div className="flex justify-end space-x-4">
                <Link to="/"><button type="button" className="px-6 py-2 border rounded-md dark:border-violet-400">Back
                    <span className="sr-only sm:not-sr-only"> to Home</span>
                </button></Link>
                <Link to="/services"><button type="button" className="px-6 py-2 border rounded-md dark:bg-violet-400 dark:text-gray-900 dark:border-violet-400">
                    <span className="sr-only sm:not-sr-only">Continue to </span>Explore More
                </button></Link>
            </div>
        </div>

    );
};

export default Reviews;