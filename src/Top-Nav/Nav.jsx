import React from 'react';
import "./Nav.css"
import { Link } from 'react-router-dom';
import CircleWithImage from './CircleWithImage/Circlewi';
import { FaBell } from 'react-icons/fa';
const Nav = () => {
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
                <div className="notification-icon">
                    <FaBell />
                </div>
                <CircleWithImage />

            </div>
        </div>

    );
};

export default Nav;
