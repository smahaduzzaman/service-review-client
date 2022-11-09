import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    if (loading) {
        return <div className="w-16 h-16 border-4 mx-auto my-5 border-dashed rounded-full animate-spin dark:border-violet-400"></div>
    }
    if (user) {
        return children;
    }
    return <Navigate to="/signin" state={{ from: location }} replace></Navigate>;
};

export default PrivateRoute;