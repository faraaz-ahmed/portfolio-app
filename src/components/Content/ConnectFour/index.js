// import logo from './logo.svg';
// import './App.css';
// import HomeNavBar from './components/navbar';
import { Card } from 'react-bootstrap';
import styled from 'styled-components';
import { getGlobalStyles } from '../../../AppConstants';
import { useSelector } from 'react-redux';
import { CustomText } from '../../../App';
import Game from './Game';
import './Game.css';

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

const ConnectFour = () => {
	const globalStyles = getGlobalStyles(useSelector((state) => state.mode));
	return (
		<>
			<CustomText size='2.5rem' colour={globalStyles.textColour}>
				Tic Tac Toe
			</CustomText>
			<br></br>
			<Game></Game>
		</>
	);
};

export default ConnectFour;
