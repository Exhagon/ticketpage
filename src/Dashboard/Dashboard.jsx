import React, { useState, useEffect } from 'react';
import Nav from '../Top-Nav/Nav';
import "./Dashboard.css";
import BottomNav from '../bottom-nav/BottomNav';
import Ticket from './Ticket/Ticket';
import TicketModal from './Modal/TicketModal';
const Dashboard = () => {
    const [cTicket, setCTicket] = useState([]);
    const [tiBottomNav/>R, setTicketR] = useState(0);
    const [name, setName] = useState('');
    const [selectedTicket, setSelectedTicket] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    useEffect(() => {
        const initialTickets = [
            { nombre: "Ticket 1", tTicket: 101, pTicket: 2, time: '00:00:30' },
            { nombre: "Ticket 2", tTicket: 102, pTicket: 3, time: '00:30:00' },
            { nombre: "Ticket 3", tTicket: 103, pTicket: 4, time: '00:10:00' },
            { nombre: "Ticket 4", tTicket: 104, pTicket: 5, time: '00:15:00' }
        ];
        setName("Joaquin");
        setCTicket(initialTickets);
        setTicketR(2);
    }, []);
    const getTimeColor = (time) => {
        const [hours, minutes, seconds] = time.split(':').map(Number);
        const totalSeconds = hours * 3600 + minutes * 60 + seconds;

        if (totalSeconds < 60) {
            return 'red';
        } else if (totalSeconds <= 600) {
            return 'orange';
        } else {
            return 'black';
        }
    };
    const handleTicketClick = (ticket) => {
        setSelectedTicket(ticket);
        setIsModalOpen(true);
    };
    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedTicket(null);
    };
    const acceptTicket =()=>{
        alert('aceptó elticket')
        closeModal();
    }

    return (
        <div className='aa100'>
            <Nav />
            <div className='contentD'>
                <h1>Hola {name}, hoy has resuelto</h1>
                <h1 style={{ marginTop: '0rem', marginBottom: '5rem' }}>{ticketR} Tickets</h1>
               
                <div className='contentF'>

                    <div className='rectangle' />
                    {cTicket.map((ticket, index) => (
                        <div key={index} style={{cursor:'pointer'}} onClick={() => handleTicketClick(ticket)}>
                            <Ticket
                                key={index}
                                nombre={ticket.nombre}
                                tTicket={ticket.tTicket}
                                pTicket={ticket.pTicket}
                                time={ticket.time}
                                timeColor={getTimeColor(ticket.time) }
                            />
                            <div className='rectangle' />
                        </div>
                    ))}
                </div>
            </div>

            <BottomNav />
            {isModalOpen && selectedTicket && (
                <TicketModal 
                    acceptTicket={acceptTicket}
                    ticket={selectedTicket}
                    onClose={closeModal}
                />
            )}
        </div>
    );
}
export default Dashboard;