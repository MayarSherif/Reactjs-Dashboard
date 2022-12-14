import React from "react";
import { Routes, Route } from "react-router-dom";

import Signin from '../pages/Signin';
import Signup from '../pages/Signup';

const Routermain = () => {
    return (
        <Routes>
            
            <Route index element={<Signin />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/signup" element={<Signup />} />
        </Routes>
    );
};

export default Routermain;
