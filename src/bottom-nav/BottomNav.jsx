import React from 'react';
import "./BottomNav.css"
import { Link } from 'react-router-dom';
import CircleWithImage from '../Top-Nav/CircleWithImage/Circlewi';
import { FaBell } from 'react-icons/fa';
const BottomNav = () => {
    return (
        <div className='top'>
            <div className='center topcontent'>
                <h1>TICKET.COM</h1>
                <nav>
                    <ul>
                        <li>
                            <Link to="/dashboard">INICIO</Link>
                        </li>
                        <li>
                            <Link to="/ticket">TICKET</Link>
                        </li>
                    </ul>
                </nav>
                <div style={{height:"4.5rem", width:"3rem", marginLeft:"2rem"}}></div>
                <div style={{height:"6rem", width:"6rem", marginLeft:"2rem"}}></div>
            </div>
        </div>

    );
};

export default BottomNav;