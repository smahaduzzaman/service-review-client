import React from 'react';
import Helmet from 'react-helmet';
import { Link } from 'react-router-dom';

const User = ({ user }) => {
    const { name, photoUrl, createdAt } = user;
    return (
        <div>
            <Helmet>
                <title>User</title>
                <meta name="description" content="User" />
            </Helmet>
            <img alt="" src={photoUrl} className="object-cover w-12 h-12 rounded-full shadow dark:bg-gray-500" />
            <div className="flex flex-col space-y-1">
                <Link rel="noopener noreferrer" href="#" className="text-sm font-semibold">{name}</Link>
                <span className="text-xs dark:text-gray-400">{createdAt}</span>
            </div>
        </div>
    );
};

export default User;