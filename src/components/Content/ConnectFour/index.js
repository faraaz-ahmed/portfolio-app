import { getGlobalStyles } from '../../../AppConstants';
import { useSelector } from 'react-redux';
import { CustomText } from '../../../App';
import Game from './Game';
import './Game.css';

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
