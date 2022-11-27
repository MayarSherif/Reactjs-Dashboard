import React from "react";
import { Routes, Route} from "react-router-dom";

import Dashboard from "../pages/Dashboard";
import Bookings from "../pages/Bookings";
import SellCars from "../pages/SellCars";
import Services from "../pages/Services";
import Calender from "../pages/Calender";
import Messages from "../pages/Messages";

import Settings from "../pages/Settings";
import Assets from "../pages/Assets";



const Router = () => {
  return (
    <Routes>
        <Route index element={<Dashboard />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/assets" element={<Assets />} />
        <Route path="/bookings" element={<Bookings />} />
        <Route path="/sellcars" element={<SellCars />} />
        <Route path="/sellcars" element={<Services />} />
        <Route path="/sellcars" element={<Calender />} />
        <Route path="/sellcars" element={<Messages />} />
        <Route path="/settings" element={<Settings />} />
    </Routes>
  );
};

export default Router;
