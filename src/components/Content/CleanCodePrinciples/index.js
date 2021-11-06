// import logo from './logo.svg';
// import './App.css';
// import HomeNavBar from './components/navbar';
import { Card } from 'react-bootstrap';
import styled from 'styled-components';
import { getGlobalStyles } from '../../../AppConstants';
import { useSelector } from 'react-redux';
import { CustomText } from '../../../App';
import { TEMPLATE_CONSTANTS } from '../../../TemplateConstants';
import CustomCleanCodeCard from '../../Common-Components/CustomCleanCodeCard.js';

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

const CleanCodePrinciples = () => {
	const globalStyles = getGlobalStyles(useSelector((state) => state.mode));
	const cleanCodeSections = TEMPLATE_CONSTANTS.CLEANCODE.SECTIONS;
	const { cleanCodeIndex } = useSelector((state) => state.cardIndex);
	return (
		<>
			<CustomText size='2.5rem' colour={globalStyles.textColour}>
				Clean Code Guide
			</CustomText>
			<CustomCleanCodeCard
				cleanCodeSection={cleanCodeSections[cleanCodeIndex]}
			></CustomCleanCodeCard>
		</>
	);
};

export default CleanCodePrinciples;
