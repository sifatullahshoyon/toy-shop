import React from 'react';
import Navbar from '../components/shared/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/Home/Footer/Footer';

const SubMainLayout = () => {
    return (
        <>
           <Navbar />
           <div className="min-h-[calc(100vh-417px)]">
                <Outlet />
            </div> 
            <Footer />
        </>
    );
};

export default SubMainLayout;