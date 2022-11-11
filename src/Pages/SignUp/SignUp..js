import React, { useContext } from 'react';
import Helmet from 'react-helmet';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import upImage from '../../assets/logos/get-your-writer-logo.png'

const SignUp = () => {
    const { createUser } = useContext(AuthContext);

    const handleSignUp = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                toast.success('User Created Successful');
            })
            .catch(err => {
                console.log(err);
                toast.error('User Created Failed');
            });
    }

    return (
        <div className=' dark:bg-gray-900 dark:text-gray-100"'>
            <Helmet>
                <title>Sign Up</title>
                <meta name="description" content="Sign Up" />
            </Helmet>
            <div className="w-3/4 p-8 space-y-3 mx-auto dark:bg-gray-900 dark:text-gray-100">
                <h1 className="text-2xl font-bold text-center">Sign Up</h1>
                <form onSubmit={handleSignUp} novalidate="" action="" className="space-y-6 ng-untouched ng-pristine ng-valid">
                    <div className="space-y-1 text-sm">
                        <label for="username" className="block dark:text-gray-400">Username</label>
                        <input type="text" name="name" id="name" placeholder="Name" className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" />
                    </div>
                    <div className="space-y-1 text-sm">
                        <label for="username" className="block dark:text-gray-400">Username</label>
                        <input type="email" name="email" id="email" placeholder="Email" className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" />
                    </div>
                    <div className="space-y-1 text-sm">
                        <label for="phone" className="block dark:text-gray-400">Phone No</label>
                        <input type="phone" name="phone" id="Phone" placeholder="Phone No" className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" />
                    </div>
                    <div className="space-y-1 text-sm">
                        <label for="password" className="block dark:text-gray-400">Password</label>
                        <input type="password" name="password" id="password" placeholder="Password" className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" />
                        <div className="flex justify-end text-xs dark:text-gray-400">
                            <Link rel="noopener noreferrer" to="#">Forgot Password?</Link>
                        </div>
                    </div>
                    <input type="submit" value="Sign Up" placeholder='Sing Up' className="block w-full p-3 text-center rounded-sm dark:text-gray-900 dark:bg-violet-400" />
                </form>
                <div>
                    <img className='w-1/6 mx-auto h-auto rounded-full  mb-3' src={upImage} alt="" />
                    <p className="text-xl text-center sm:px-6 dark:text-gray-400">Already have an account? Please
                        <Link rel="noopener noreferrer" to="/signin" className="underline dark:text-gray-100"> Sign In</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SignUp;