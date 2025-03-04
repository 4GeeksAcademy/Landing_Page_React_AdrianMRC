import React, { useState } from 'react';
import { Button, Alert } from 'react-bootstrap';

const Jumbotron = () => {
  const [buttonVariant, setButtonVariant] = useState('primary');
  const [currentMessage, setCurrentMessage] = useState('');
  const [messages] = useState([
    "¡Los hooks son mágicos! 🧙♂️",
    "Props > Profecías ⚛️",
    "React no pica... mucho 🐛",
    "setState() = superpoderes 💪",
    "¡JSX es HTML con esteroides! 💉",
    "¡Calma! Los props no muerden... mucho 🦖",
    "El virtual DOM es tu amigo 🤖",
    "¿State? Es solo el arte de recordar cosas 🧠",
    "Renderizado condicional: if (dudas) { return café } ☕",
    "¡React no es un error, es un estilo de vida! 🚀"
  ]);

  const handlePanicClick = () => {
    const colors = ['primary', 'danger', 'success', 'warning', 'info'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    setButtonVariant(randomColor);
    
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    setCurrentMessage(randomMessage);
  };

  return (
    <div className="p-5 bg-light rounded-3 mb-4">
      <h1 className="display-4">JUMBOTRON 3000!</h1>
      <p className="lead">
        Bueno, bueno, bueno, ya sabéis por mis anteriores entregas que me encanta dar formato a casi todo...
        Me gusta que se vea bonito y trastear con el código hasta entenderlo, aquí dejo los 4 primeros 
        personajes de Rick y Morty usando la API como vimos en clase :D
      </p>
      
      <Button 
        variant={buttonVariant}
        onClick={handlePanicClick}
        className="mb-2"
      >
        Botón del pánico a React
      </Button>
      
      {currentMessage && (
        <Alert variant={buttonVariant} className="mt-3" onClose={() => setCurrentMessage('')} dismissible>
        {currentMessage}
      </Alert>
      )}
    </div>
  );
};

export default Jumbotron;




