// import logo from './logo.svg';
// import './App.css';
// import HomeNavBar from './components/navbar';
import styled from 'styled-components';
import { getGlobalStyles } from '../../../AppConstants';
import { useSelector } from 'react-redux';
import { CustomText } from '../../../App';
import { TEMPLATE_CONSTANTS } from '../../../TemplateConstants';
import CustomProjectCard from '../../Common-Components/CustomProjectCard';
import {
	FlexRowContainer,
	ButtonContainer,
} from '../../Common-Components/CustomCss';
import { useState } from 'react';
import { Button } from 'react-bootstrap';

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

const Projects = () => {
	const globalStyles = getGlobalStyles(useSelector((state) => state.mode));
	const projects = TEMPLATE_CONSTANTS.PROJECTS;
	const { projectIndex } = useSelector((state) => state.cardIndex);
	return (
		<>
			<CustomText size='2.5rem' colour={globalStyles.textColour}>
				Projects
			</CustomText>
			<CustomProjectCard project={projects[projectIndex]}></CustomProjectCard>

			{/* {renderProjects(projects)} */}
			{/* <CustomProjectCard></CustomProjectCard> */}
		</>
	);
};

export default Projects;
