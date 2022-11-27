import React from 'react';
import { Outlet } from 'react-router-dom'
import Sidebar from "../components/Sidebar/Sidebar";
import TopNav from "../components/TopNav/TopNav";
import Router from '../routes/Router';
import './Layout.css'
const Layout = () => {
    return (
        <div className="layout">
            <Sidebar />
            <div className="main__layout">
                <TopNav />
                <Outlet />
            </div>
        </div>
    )
}

export default Layout