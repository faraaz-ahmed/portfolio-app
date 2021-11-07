import { ModeTypes } from '../../AppConstants';
import { ACTION_TYPE } from '../actiontypes';

export const toggleMode = (currentMode) => {
	return {
		type: ACTION_TYPE.CHANGE_MODE,
		mode: currentMode === ModeTypes.light ? ModeTypes.dark : ModeTypes.light,
	};
};
