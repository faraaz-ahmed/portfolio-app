import { TAB_NAMES } from '../../AppConstants';
import { ACTION_TYPE } from '../actiontypes';

const initialState = {
	tab: TAB_NAMES.ABOUT,
};

export const tabsReducer = (state = initialState, action) => {
	if (action.type === ACTION_TYPE.UPDATE_TABS) {
		return {
			...state,
			tab: action.tab,
		};
	}
	return state;
};
