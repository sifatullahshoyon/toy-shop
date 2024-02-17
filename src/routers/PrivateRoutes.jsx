import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProviders';
import Spinner from '../components/Spinner/Spinner';

const PrivetRoutes = ({children}) => {
    const {user , loading} = useContext(AuthContext);
    const location = useLocation();

    if(loading){
        return <Spinner />
    }

    if(user?.email){
        return children;
    }
    return <Navigate to='/login' state={{from : location}} replace={true}></Navigate>;
};

export default PrivetRoutes;