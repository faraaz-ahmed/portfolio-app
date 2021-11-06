import { ModeTypes, TAB_NAMES } from '../../AppConstants';
import { ACTION_TYPE } from '../actiontypes';

const initialState = {
	mode: ModeTypes.light,
};

export const modeReducer = (state = initialState, action) => {
	if (action.type === ACTION_TYPE.CHANGE_MODE) {
		return {
			...state,
			mode: action.mode,
		};
	}
	return state;
};
