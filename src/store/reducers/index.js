import { combineReducers } from 'redux';
import { tabsReducer } from './tabs';
import { modeReducer } from './mode';
import { indexReducer } from './CardIndex';

const rootReducer = combineReducers({
	tab: tabsReducer,
	mode: modeReducer,
	cardIndex: indexReducer,
});

export default rootReducer;
