
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import { Link } from 'react-router-dom';
import Review from './Review';
import Helmet from 'react-helmet';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Reviews = () => {
    const { user, logOut } = useContext(AuthContext);
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        // fetch(`http://localhost:5000/reviews?email=${user?.email}`)

        fetch(`http://localhost:5000/reviews`, {
            // headers: {
            // authorization: `Bearer ${localStorage.getItem('token')}`

            // }
        })
            .then(res => {
                // if (res.status === 401 || res.status === 403) {
                //     return logOut();
                // }
                return res.json();
            })
            .then(data => {
                console.log('reviews', data);
                setReviews(data);
                toast.success('Reviews Loaded');
            })
    }, [user?.email, logOut]);

    return (
        <div className="flex flex-col w-full mx-auto py-10 p-6 space-y-4 sm:p-10 dark:bg-gray-900 dark:text-gray-100">
            <Helmet>
                <title>Reviews</title>
                <meta name="description" content="Reviews" />
            </Helmet>
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
                <p className="text-sm dark:text-gray-400">Wonderful! This site acheive pretty much feedbacks from VIP's.</p>
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