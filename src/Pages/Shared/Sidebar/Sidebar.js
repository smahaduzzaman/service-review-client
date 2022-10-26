import React, { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/categories')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])
    return (
        <div>
            <h2>All Courses {categories.length}</h2>
            {
                categories.map(category => <Link to={`/category/${category.id}`}><p>{category.name}</p></Link>)
            }
        </div>
    );
};

export default Sidebar;