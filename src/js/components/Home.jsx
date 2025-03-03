import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import CustomNavbar from './Navbar';
import Jumbotron from './Jumbotron';
import CustomCard from './Card';
import Footer from './Footer';

const Home = () => {
	const cardsData = [
		{
			title: "Card title",
			text: "Some quick example text to build on the card title...",
			image: "https://via.placeholder.com/500x325",
			buttonUrl: "#"
		},
		{
			title: "Card title",
			text: "Some quick example text to build on the card title...",
			image: "https://via.placeholder.com/500x325",
			buttonUrl: "#"
		},
		{
			title: "Card title",
			text: "Some quick example text to build on the card title...",
			image: "https://via.placeholder.com/500x325",
			buttonUrl: "#"
		},
		{
			title: "Card title",
			text: "Some quick example text to build on the card title...",
			image: "https://via.placeholder.com/500x325",
			buttonUrl: "#"
		},
	];

	return (
		<>
		  <CustomNavbar />
		  <Container className="mt-4">
			<Jumbotron />
			<Row>
			  {cardsData.map((card, index) => (
				<Col key={index} className="mb-4" md={3}> 
				  <CustomCard
					title={card.title}
					text={card.text}
					image={card.image}
					buttonUrl={card.buttonUrl}
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