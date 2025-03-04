import React from 'react';
import { Button } from 'react-bootstrap'; 

const Jumbotron = () => (
  <div className="p-5 bg-light rounded-3 mb-4">
    <h1 className="display-4">JUMBOTRON 3000!</h1>
    <p className="lead">
      Bueno, bueno, bueno, ya sabeís por mis anteriores entregas que me encanta dar formato a casi todo...
      Me gusta que se vea bonito y trastear con el codigo hasta entenderlo, aqui dejo los 4 primeros 
      personajes de Rick y Morty usando la API como vimos en clase :D
    </p>
    <Button variant="primary">Botón del pánico a React</Button>
  </div>
);

export default Jumbotron;