import { getGlobalStyles } from '../../../AppConstants';
import { useSelector } from 'react-redux';
import { CustomText } from '../../../App';
import { TEMPLATE_CONSTANTS } from '../../../TemplateConstants';
import CustomProjectCard from '../../Common-Components/CustomProjectCard';

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
		</>
	);
};

export default Projects;
