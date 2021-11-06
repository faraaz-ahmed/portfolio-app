import { ModeTypes, TAB_NAMES } from '../../AppConstants';
import { ACTION_TYPE } from '../actiontypes';

const initialState = {
	projectIndex: 0,
	cleanCodeIndex: 0,
};

export const indexReducer = (state = initialState, action) => {
	if (action.type === ACTION_TYPE.CHANGE_PROJECT_INDEX) {
		return {
			...state,
			projectIndex: action.projectIndex,
		};
	} else if (action.type === ACTION_TYPE.CHANGE_CLEAN_CODE_INDEX) {
		return {
			...state,
			cleanCodeIndex: action.cleanCodeIndex,
		};
	}
	return state;
};
