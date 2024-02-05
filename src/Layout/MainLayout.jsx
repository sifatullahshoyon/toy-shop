import React from 'react';
import { Outlet } from 'react-router-dom';
import Appbar from '../pages/Appbar/Appbar';
import Navbar from '../components/shared/Navbar/Navbar';

const MainLayout = () => {
    return (
        <div>
            <Appbar />
            <Navbar />
            <div>
                <Outlet />
            </div>
        </div>
    );
};

export default MainLayout;