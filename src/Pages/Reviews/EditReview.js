import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Helmet } from "react-helmet";

const EditReview = (id) => {
    const handleEditReview = (event) => {
        event.preventDefault();
        const form = event.target;
        const feedback = form.feedback.value;
        // const id = form.id.value;
        const reviewData = {
            feedback
        };

        console.log(reviewData);

        fetch(`http://localhost:5000/reviews/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(reviewData)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    alert('Review updated successfully');
                    form.reset();
                    toast.success('Review updated successfully');
                }
            })

    }

    return (
        <form onSubmit={handleEditReview} className="flex flex-col w-1/2 mt-10 mx-auto">
            <h2 className='text-3xl text-center mb-5 font-bold'>Update Your Review</h2>
            <textarea name='feedback' id='message' rows="3" placeholder="Message..." className="p-4 rounded-md resize-none dark:text-gray-100 dark:bg-gray-900" required></textarea>
            <input type="submit" className="py-4 my-8 font-semibold rounded-md dark:text-gray-900 dark:bg-violet-400" value="Leave feedback" />
        </form>
    );
};

export default EditReview;