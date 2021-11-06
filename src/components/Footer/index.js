import { Card, Navbar } from 'react-bootstrap';
import styled from 'styled-components';

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

const FooterContainer = styled.div`
	position: absolute;
	bottom: 1rem;
`;

const Footer = () => {
	return (
		<>
			<FooterContainer>
				{/* <Navbar bg='light'> */}
				<a href='https://twitter.com/faraaz_ahmed_' target='_blank'>
					<img src='https://img.icons8.com/fluent/30/000000/twitter.png' />
				</a>
				{/* <a
					href='https://www.linkedin.com/in/faraaz-ahmed-286a75141'
					target='_blank'
				>
					<img src='../../assets/images/linkedin-icon.png' />
				</a> */}
				{/* </Navbar> */}
			</FooterContainer>
		</>
	);
};

export default Footer;
