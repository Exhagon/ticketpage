import React, { useState } from 'react';
import Nav from '../Top-Nav/Nav';
import "./Dashboard.css";
import BottomNav from '../bottom-nav/BottomNav';
const Dashboard = ()=>{
    return (
        <div className='aa100'>
             <Nav/>
            <h1>Dashboard</h1>
            <p>This is the dashboard page</p>
            <BottomNav/>
        </div>
    );
}
export default Dashboard;