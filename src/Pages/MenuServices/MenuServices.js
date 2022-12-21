import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import MenuSingleService from './MenuSingleService';

const MenuServices = () => {
    const [menuServices, setMenuServices] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/allservices`)
            .then(res => res.json())
            .then(data => setMenuServices(data))
    }, [])
    return (
        <section class="text-gray-600 body-font">
            <div class="container px-5 py-24 mx-auto">
                <div class="flex flex-wrap -m-4">
                    {
                        menuServices.map(item => <MenuSingleService
                            key={item._id}
                            item={item}
                        ></MenuSingleService>)
                    }
                </div>
            </div>
        </section>
    );
};

export default MenuServices;