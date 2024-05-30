import React, { useState, useRef, useEffect } from 'react';
import "./Nav.css"
import { Link } from 'react-router-dom';
import CircleWithImage from './CircleWithImage/Circlewi';
import { FaBell } from 'react-icons/fa';
import IconModal from './iconmodal/IconModal';
import NotificationModal from './NotificationModal/NotificationModal';

const Nav = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isNotificationOpen, setIsNotificationOpen] = useState(false);
    const [notificaciones, setNotificaciones] = useState([]);
    const modalRef = useRef(null);
    const buttonRef = useRef(null);
    const notificationRef = useRef(null);
    const notificationButton = useRef(null);
    const handleClickOutside = (event) => {
        if (
            notificationRef.current &&
            !notificationRef.current.contains(event.target) &&
            notificationButton.current &&
            !notificationButton.current.contains(event.target)
        ) {
            setIsNotificationOpen(false);
        }
        if (
            modalRef.current &&
            !modalRef.current.contains(event.target) &&
            modalRef.current &&
            !buttonRef.current.contains(event.target)
        ) {
            setIsModalOpen(false);
        }
    };
    useEffect(() => {
        notificaciones.length === 0 ? setNotificaciones(['texto','texto','texto','texto']) : 0;
        document.addEventListener('click', handleClickOutside, true);
        return () => {
            document.removeEventListener('click', handleClickOutside, true);
        };
    }, []);
    const handleNotificationClick = () => {
        setIsNotificationOpen(!isNotificationOpen);
    };

    const handleModalClick = () => {
        setIsModalOpen(!isModalOpen);
    };
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
                <div ref={notificationButton} className="notification-icon" onClick={handleNotificationClick}>
                    <FaBell />
                    {isNotificationOpen &&
                            <NotificationModal
                                modalRef={notificationRef}
                                notificaciones = {notificaciones} />
                    }
                </div>
                <div ref={buttonRef} style={{ width: '6rem', height: '6rem' }} onClick={handleModalClick}>
                    <CircleWithImage />
                </div>
            </div>
            {isModalOpen && 
                <IconModal
                    modalRef={modalRef} />
            }
        </div>

    );
};

export default Nav;
