import React from 'react';
import './Circlewi.css';
import exampleImage from './fotoestandar.jpg'; // Asegúrate de que la ruta de la imagen sea correcta

const CircleWithImage = () => {
  return (
    <div className="circle-container">
      <div className="circle">
        <img src={exampleImage} alt="Example" className="circle-image" />
      </div>
    </div>
  );
};

export default CircleWithImage;
