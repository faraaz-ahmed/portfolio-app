import { getGlobalStyles } from '../../../AppConstants';
import { useSelector } from 'react-redux';
import { CustomText } from '../../../App';
import { TEMPLATE_CONSTANTS } from '../../../TemplateConstants';
import CustomCleanCodeCard from '../../Common-Components/CustomCleanCodeCard.js';

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
