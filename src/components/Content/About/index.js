// import logo from './logo.svg';
// import './App.css';
// import HomeNavBar from './components/navbar';
import { Card } from 'react-bootstrap';
import styled from 'styled-components';
import { getGlobalStyles } from '../../../AppConstants';
import { useSelector } from 'react-redux';
import { CustomText } from '../../../App';

const Heading = styled.div`
	font-size: 2.5rem;
`;

const Subheading = styled.div`
	font-size: 0.8rem;
`;

const Paragraph = styled.div`
	align: center;
	font-size: 1rem;
`;

const CardContainer = styled.div`
	margin: 5rem 20rem 10rem 20rem;
	padding: auto;
	width: 50rem;
	align: center;
`;

const About = () => {
	const globalStyles = getGlobalStyles(useSelector((state) => state.mode));
	return (
		<>
			<CardContainer>
				<Card
					bg={globalStyles.card.bg ?? 'light'}
					text={globalStyles.card.text ?? 'black'}
				>
					{/* <Card.Img variant="top" src="holder.js/100px180" /> */}
					<Card.Body>
						{/* <Card.Title>Card Title</Card.Title> */}
						{/* <Card.Text>
							Hello, I'm a software engineer skilled at front end and back end web
							applications with over two years of professional experience.
						</Card.Text> */}
						<Card.Text>
							<CustomText size='1rem' colour={globalStyles.textColour}>
								Software Engineer who focusses on writing clean, elegant and
								efficient code.
							</CustomText>
						</Card.Text>
						{/* <Button variant="primary">Go somewhere</Button> */}
					</Card.Body>
				</Card>
			</CardContainer>
		</>
	);
};

export default About;
