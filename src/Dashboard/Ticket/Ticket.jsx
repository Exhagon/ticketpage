import React, { useEffect, useState } from 'react';
import "./Ticket.css";
import CircleWithImage from '../../Top-Nav/CircleWithImage/Circlewi';
const Ticket = ({nombre,tTicket,pTicket,time, timeColor})=>{
    return (
        <div className='contentTicket'>
            <CircleWithImage />
            <p>Nombre: {nombre}</p>
            <p>Tipo de Ticket: {tTicket}</p>
            <p>Prioridad de Ticket: {pTicket}</p>
            <p style={{ color: timeColor }}>{time}</p>
        </div>
    );
}
export default Ticket;