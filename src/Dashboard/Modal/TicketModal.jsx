import React from 'react';
import "./TicketModal.css"; // Asegúrate de tener estilos para el modal
import CircleWithImage from '../../Top-Nav/CircleWithImage/Circlewi';
const TicketModal = ({ ticket, onClose, acceptTicket }) => {
    return (
        <div className='modal-overlay'>
            <div className='modal'>
                <CircleWithImage />
                <h2>{ticket.nombre}</h2>
                <p>Tipo de Ticket: {ticket.tTicket}</p>
                <p>Prioridad de Ticket: {ticket.pTicket}</p>
                <p>Tiempo Restante: {ticket.time}</p>
                <div className='buttondiv'>
                    <button onClick={acceptTicket} className='modal-yes-button'>Confirmar</button>
                    <button onClick={onClose} className='modal-close-button'>Rechazar</button>
                </div>
            </div>
        </div>
    );
}

export default TicketModal;
