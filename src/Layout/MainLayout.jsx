import React from 'react';
import { Outlet } from 'react-router-dom';
import Appbar from '../pages/Appbar/Appbar';
import Navbar from '../components/shared/Navbar/Navbar';
import Home from '../pages/Home/Home/Home';

const MainLayout = () => {
    return (
        <div>
            <Appbar />
            <Navbar />
            <Home />
            <div>
                <Outlet />
            </div>
        </div>
    );
};

export default MainLayout;