import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import CustomNavbar from './Navbar';
import Jumbotron from './Jumbotron';
import CustomCard from './Card';
import Footer from './Footer';
import {getCharacters} from '../../mock/characters';

const Home = () => {
	const [characters] = useState(getCharacters.slice(0, 4));
  
	return (
	  <>
		<CustomNavbar />
		<Container className="mt-4">
		  <Jumbotron />
			<Row xs={1} sm={2} md={3} lg={4} className="g-4">
			  {characters.map((character) => (
				<Col key={character.id}>
				  <CustomCard
					name={character.name}
					image={character.image}
					status={character.status}
					species={character.species}
					location={character.location.name}
					buttonUrl={character.url}
					
				  />
				</Col>
			  ))}
			</Row>
		</Container>
		<Footer />
	  </>
	);
  };
  
  export default Home;