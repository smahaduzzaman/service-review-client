import React, { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch(`https://b610-lerning-platform-server-side-smahaduzzaman.vercel.app/categories`)
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])
    const handleCategoryCount = (id) => {
        fetch(`https://b610-lerning-platform-server-side-smahaduzzaman.vercel.app/categories/${id}`)
            .then(res => res.json())
            .then(data => {
                return data.length;
            })
    }
    return (
        <div>
            <h5>Popular Courses: {categories.length}</h5>
            {
                categories.map(category => <p key={category.id}>
                    <Link onClick={handleCategoryCount} to={`/category/${category.id}`}>{category.name}</Link>
                </p>)

            }
        </div>
    );
};

export default Sidebar;