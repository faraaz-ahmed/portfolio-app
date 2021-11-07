import { CustomText } from '../../../App';
import { getGlobalStyles } from '../../../AppConstants';
import { useSelector } from 'react-redux';

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
