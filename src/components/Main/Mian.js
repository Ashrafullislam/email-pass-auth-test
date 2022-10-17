import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';

const Mian = () => {
    return (
        <div>
         
          <Navbar > </Navbar>
          <Outlet > </Outlet>
        </div>
    );
};

export default Mian;<h3>Main </h3>