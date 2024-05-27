import { memo } from 'react';
import React, { useState } from 'react';
import './resets.css';
import "./Login.css";
import eyeclose from "./img/eye-close.png";
import eyeopen from "./img/eye-open.png";

const Login = () => {
  const [visible, setVisible] = useState(false);
  const [eyeIcon, setEyeIcon] = useState(eyeclose);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const validateEmail = (email) => {
    // Expresión regular para validar el correo electrónico
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const sendAuth = ()=>{
     if (!validateEmail(username)) {
      console.log('Correo electrónico no válido');
    } else {
      console.log('aa');
    }
    alert(`Username: ${username}\nPassword: ${password}`);
  }
  const togglepasswordVisibility = () => {
    if(visible){
      setVisible(false);
      setEyeIcon(eyeclose);
      
    } else{
      setVisible(true);
      setEyeIcon(eyeopen);
    }
  }
  return (
    <div className={"root clapyResets"}>
      <div className="center">
        <div className='dialog center'>
          <div className='dialogI '>
            <h1 className='tickety'>Ticket.com</h1>
            <input type='email' placeholder='email' id='email' 
                   className='textbox'  value={username} onChange={(e) => setUsername(e.target.value)}/>
            <div className='textbox'>
              <input type={visible ? "text": "password"} placeholder='password' id='password' 
                     className='textbox' value={password} onChange={(e) => setPassword(e.target.value)}/>
              <img src={eyeIcon} id='eyeicon' onClick={togglepasswordVisibility}></img>
            </div>
            <button className='button' onClick={sendAuth} > <p className='isesion'>Iniciar sesion</p></button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Login;
