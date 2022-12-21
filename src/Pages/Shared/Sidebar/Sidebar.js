import React, { useState } from 'react';
import { useEffect } from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Sidebar = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/categories`)
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])

    return (
        <div>
            <h5>Popular Courses: {categories.length}</h5>
            {
                categories.map(category => <p
                    key={category.id}

                >
                    <Link to={`/category/${category.id}`}>{category.name}</Link>
                </p>)

            }
        </div>
    );
};

export default Sidebar;