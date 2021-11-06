import { ModeTypes } from '../../AppConstants';
import { ACTION_TYPE } from '../actiontypes';

export const toggleMode = (currentMode) => {
	// const { mode: currentMode } = useSelector(state => state.mode, (prev, next) => prev.mode === next.mode);
	return {
		type: ACTION_TYPE.CHANGE_MODE,
		mode: currentMode === ModeTypes.light ? ModeTypes.dark : ModeTypes.light,
	};
};
