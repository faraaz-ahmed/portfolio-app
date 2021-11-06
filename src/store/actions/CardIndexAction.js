import { ModeTypes } from '../../AppConstants';
import { ACTION_TYPE } from '../actiontypes';

export const changeProjectIndex = (projectIndex = 0) => {
	// const { mode: currentMode } = useSelector(state => state.mode, (prev, next) => prev.mode === next.mode);
	return {
		type: ACTION_TYPE.CHANGE_PROJECT_INDEX,
		projectIndex: projectIndex ?? 0,
	};
};

export const changeCleanCodeIndex = (cleanCodeIndex = 0) => {
	// const { mode: currentMode } = useSelector(state => state.mode, (prev, next) => prev.mode === next.mode);
	return {
		type: ACTION_TYPE.CHANGE_CLEAN_CODE_INDEX,
		cleanCodeIndex: cleanCodeIndex ?? 0,
	};
};
