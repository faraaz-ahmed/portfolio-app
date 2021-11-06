import { TAB_NAMES } from '../../AppConstants';
import { ACTION_TYPE } from '../actiontypes';

export const updateTabs = (tab) => {
	return {
		type: ACTION_TYPE.UPDATE_TABS,
		tab: tab ?? TAB_NAMES.ABOUT,
	};
};
