// import logo from './logo.svg';
// import './App.css';
// import HomeNavBar from './components/navbar';
import styled from 'styled-components';
import { CustomText } from '../../../App';
import { getGlobalStyles } from '../../../AppConstants';
import { useSelector } from 'react-redux';

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

const Education = () => {
	const globalStyles = getGlobalStyles(useSelector((state) => state.mode));
	return (
		<>
			<CustomText size='2.5rem' colour={globalStyles.textColour}>
				Education
			</CustomText>
		</>
	);
};

export default Education;
