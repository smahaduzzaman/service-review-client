import React from 'react';

const User = ({ user }) => {
    const { name, photoUrl, createdAt } = user;
    return (
        <div>
            <img alt="" src={photoUrl} className="object-cover w-12 h-12 rounded-full shadow dark:bg-gray-500" />
            <div className="flex flex-col space-y-1">
                <a rel="noopener noreferrer" href="#" className="text-sm font-semibold">{name}</a>
                <span className="text-xs dark:text-gray-400">{createdAt}</span>
            </div>
        </div>
    );
};

export default User;