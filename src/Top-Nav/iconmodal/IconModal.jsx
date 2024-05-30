import React, { useEffect, useState, useRef } from 'react';
import './IconModal.css';
import { useAuth } from '../../AuthProvider/AuthProvider';

const IconModal = ({modalRef}) => {
  const { logout } = useAuth();
  return (
    <div ref={modalRef} className="icon-container">
      <div className="icon-modal">
        <ul>
          <li>
            <button className="icon-option">Configuracion</button>
          </li>
          <li>
            <button className="icon-option" onClick={logout}>Cerrar Sesion</button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default IconModal;
