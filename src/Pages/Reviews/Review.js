import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Review = ({ review }) => {
    const [reviews, setReviews] = useState([]);
    const { _id, title, description, img, feedback, author } = review;


    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || '/details';

    // handle delete with localStorage
    const handleDelete = (id) => {
        const isDelete = window.confirm('Are you sure?');
        if (isDelete) {
            fetch(`http://localhost:5000/reviews/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        alert('deleted successfully');
                        const remaining = reviews.filter(review => review._id !== id);
                        setReviews(remaining);
                        // update localStorage
                        localStorage.setItem('reviews', JSON.stringify(remaining));
                    }

                })
        }
    }

    const handleUpdate = id => {
        alert('Do you need to update this review?');
        fetch(`http://localhost:5000/reviews/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ status: 'Submitted' })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    const remaining = reviews.filter(rev => rev._id !== id);
                    const updating = reviews.find(rev => rev._id === id);
                    updating.status = 'Approved'
                    const newReviews = [updating, ...remaining];
                    setReviews(newReviews);
                }
                navigate(from, { replace: true });
            })
    }

    return (
        <li className="flex flex-col py-6 sm:flex-row sm:justify-between">
            <div className="flex w-full space-x-2 sm:space-x-4">
                {
                    img ?
                        <img className="flex-shrink-0 object-cover w-20 h-20 dark:border-transparent rounded outline-none sm:w-32 sm:h-32 dark:bg-gray-500" src={author.photoUrl} alt={author.name} />
                        :
                        <img className="flex-shrink-0 object-cover w-20 h-20 dark:border-transparent rounded outline-none sm:w-32 sm:h-32 dark:bg-gray-500" src={img} alt={title} />
                }
                <div className="flex flex-col justify-between w-full pb-4">
                    <div className="flex justify-between w-full pb-2 space-x-2">
                        <div className="space-y-1">
                            {
                                author ? <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-200">{author.name}</h3> : <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-200">{title}</h3>
                            }
                            {
                                feedback ? <p className="text-sm text-gray-500 dark:text-gray-400">{feedback}</p> : <p className="text-sm text-gray-500 dark:text-gray-400">{description.slice(0, 30)}</p>
                            }
                        </div>
                        <div className="text-right">
                            {
                                author ? <p className="text-sm text-gray-500 dark:text-gray-400">{author.createdAt}</p> : <p className="text-sm text-gray-500 dark:text-gray-400">{title}</p>
                            }
                            {
                                author ? <p className="text-sm text-gray-500 dark:text-gray-400">{author.company.website}</p> : <p className="text-sm text-gray-500 dark:text-gray-400">{author.email}</p>
                            }
                        </div>
                    </div>
                    <div className="flex text-sm divide-x">
                        <button type="button" className="flex items-center px-2 py-1 pl-0 space-x-1">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4 h-4 fill-current">
                                <path d="M96,472a23.82,23.82,0,0,0,23.579,24H392.421A23.82,23.82,0,0,0,416,472V152H96Zm32-288H384V464H128Z"></path>
                                <rect width="32" height="200" x="168" y="216"></rect>
                                <rect width="32" height="200" x="240" y="216"></rect>
                                <rect width="32" height="200" x="312" y="216"></rect>
                                <path d="M328,88V40c0-13.458-9.488-24-21.6-24H205.6C193.488,16,184,26.542,184,40V88H64v32H448V88ZM216,48h80V88H216Z"></path>
                            </svg>
                            <button onClick={() => handleDelete(_id)} type="submit" className="font-semibold dark:border-gray-100 dark:text-gray-100">Delete</button>
                        </button>
                        <button type="button" className="flex items-center px-2 py-1 space-x-1">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4 h-4 fill-current">
                                <path d="M453.122,79.012a128,128,0,0,0-181.087.068l-15.511,15.7L241.142,79.114l-.1-.1a128,128,0,0,0-181.02,0l-6.91,6.91a128,128,0,0,0,0,181.019L235.485,449.314l20.595,21.578.491-.492.533.533L276.4,450.574,460.032,266.94a128.147,128.147,0,0,0,0-181.019ZM437.4,244.313,256.571,425.146,75.738,244.313a96,96,0,0,1,0-135.764l6.911-6.91a96,96,0,0,1,135.713-.051l38.093,38.787,38.274-38.736a96,96,0,0,1,135.765,0l6.91,6.909A96.11,96.11,0,0,1,437.4,244.313Z"></path>
                            </svg>
                            <button onClick={() => handleUpdate(_id)} type="submit" className="font-semibold dark:border-gray-100 dark:text-gray-100" value="Update">Update</button>
                        </button>
                    </div>
                </div>
            </div>
        </li>
    );
};

export default Review;