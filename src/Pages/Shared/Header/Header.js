import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logos/get-your-writer-logo.png';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(res => {
                console.log(res);
            })
            .catch(err => {
                console.error(err);
            })
    }

    return (
        <header className="p-4 dark:bg-gray-800 dark:text-gray-100">
            <div className="flex justify-between h-16 mx-auto">
                <Link rel="noopener noreferrer" to="/" aria-label="Back to homepage" className="flex justify-start items-center p-2">
                    <img className='w-1/2' src={logo} alt="Logo" /></Link>
                <ul className="items-stretch hidden mr-60 space-x-3 lg:flex">
                    <li className="flex">
                        <Link rel="noopener noreferrer" to="/" className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent dark:text-violet-400 dark:border-violet-400">Home</Link>
                    </li>
                    <li className="flex">
                        <Link rel="noopener noreferrer" to="/services" className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent">Services</Link>
                    </li>
                    <li className="flex">
                        <Link rel="noopener noreferrer" to="/reviews" className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent">Reviews</Link>
                    </li>
                    <li className="flex">
                        <Link rel="noopener noreferrer" to="/faqs" className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent">FAQ's</Link>
                    </li>
                </ul>
                <div className="items-center flex-shrink-0 hidden lg:flex">
                    {
                        user?.email ?
                            <>
                                <div className=''>
                                    <Link rel="noopener noreferrer" to="/myreview" className="px-4 -mb-1 border-b-2 dark:border-transparent">My Review</Link>
                                    <Link rel="noopener noreferrer" to="/addservice" className="px-4 -mb-1 border-b-2 dark:border-transparent">Add Servece</Link>
                                </div>

                                <Link onClick={handleLogOut} rel="noopener noreferrer" to="/signin" className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent">Sign Out</Link>
                            </>
                            : <Link to="/signin" className="self-center px-8 py-3 rounded">Sign in</Link>

                    }
                    <Link to="/signup" className="self-center px-8 py-3 font-semibold rounded dark:bg-violet-400 dark:text-gray-900">Sign up</Link>
                </div>
                <button className="p-4 lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 dark:text-gray-100">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </button>
            </div>
        </header>
    );
};

export default Header;