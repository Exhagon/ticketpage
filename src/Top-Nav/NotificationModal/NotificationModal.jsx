import React, { useRef, useEffect, useState } from 'react';
import './NotificationModal.css'; // Asegúrate de crear este archivo CSS

const NotificationModal = ({modalRef, notificaciones}) => {
    return (
        <div ref={modalRef} className="notification-container">
            <div  className="notification-modal">
                <div className="notification-header">
                    <h2>NOTIFICACIONES</h2>
                </div>
                <div className="notification-content">
                    {notificaciones.map((_, index) => (
                        <p key={index}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut a diam nec mi sollicitudin ornare ac vitae nisl. Nunc nec libero eu sem ultrices efficitur.</p>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default NotificationModal;