import logo from './logo.svg';
import './App.css';
import HomeNavBar from './components/navbar';
import styled from 'styled-components';
import Content from './components/Content';
import darkBackground from './assets/images/blue-background-shade.png';
import lightBackground from './assets/images/cucumber-background-shade.png';
import { getGlobalStyles } from './AppConstants';
import { useSelector } from 'react-redux';
import Footer from './components/Footer';

const Background = styled.div`
	// border: 1px solid #000;
	// background-image: url(${(props) => props.backgroundImage});
	background: ${(props) => props.background.field1 ?? ''};
	background: ${(props) => props.background.field2 ?? ''};
	height: 200vh;
`;

export const CustomText = styled.div`
	font-size: ${(props) => props.size ?? '1rem'};
	color: ${(props) => props.colour ?? 'white'};
`;

function App() {
	const globalStyles = getGlobalStyles(useSelector((state) => state.mode));
	return (
		<div className='App'>
			<link rel='preconnect' href='https://fonts.gstatic.com'></link>
			<link
				href='https://fonts.googleapis.com/css2?family=Hanalei+Fill&display=swap'
				rel='stylesheet'
			></link>
			<Background background={globalStyles.background}>
				<HomeNavBar />
				<Content />
				<Footer />
			</Background>
		</div>
	);
}

export default App;
