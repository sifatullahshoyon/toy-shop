import React from 'react';
import Navbar from '../components/shared/Navbar/Navbar';
import { Outlet } from 'react-router-dom';

const SubMainLayout = () => {
    return (
        <>
           <Navbar />
           <div>
                <Outlet />
            </div> 
        </>
    );
};

export default SubMainLayout;