import darkBackground from './assets/images/blue-background-shade.png';
import lightBackground from './assets/images/cucumber-background-shade.png';
import { useSelector } from 'react-redux';

export const TAB_NAMES = {
	ABOUT: 'About',
	PROJECTS: 'Projects',
	EDUCATION: 'Education',
	CONNECTFOUR: 'CONNECTFOUR',
	CLEAN_CODE_GUIDE: 'CLEAN_CODE_GUIDE',
};

export const ModeTypes = {
	light: 'LIGHT',
	dark: 'DARK',
};

export const Profile = {
	name: 'Name',
};

export const ModeStyles = {
	lightMode: {
		backgroundImage: lightBackground,
		navBar: {
			bg: 'light',
			variant: 'light',
		},
		card: {
			bg: 'light',
			text: 'black',
		},
		background: {
			field1: 'rgb(238,174,202)',
			field2:
				'radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%)',
		},
		textColour: 'black',
		button: {
			variant: 'light',
			colour: '#808080',
		},
	},
	darkMode: {
		backgroundImage: darkBackground,
		navBar: {
			bg: 'dark',
			variant: 'dark',
		},
		card: {
			bg: 'dark',
			text: 'white',
		},
		background: {
			field1: 'rgb(52,52,52)',
			field2:
				'linear-gradient(0deg, rgba(52,52,52,1) 0%, rgba(31,30,30,1) 100%);',
		},
		textColour: 'white',
		button: {
			variant: 'dark',
			colour: '#808080',
		},
	},
};

// background: rgb(52,52,52);
// background: linear-gradient(0deg, rgba(52,52,52,1) 0%, rgba(31,30,30,1) 100%);
// background: rgb(57,59,59);
// background: linear-gradient(0deg, rgba(57,59,59,1) 0%, rgba(29,29,28,1) 100%);
// background: rgb(91,92,92);
// background: linear-gradient(0deg, rgba(91,92,92,1) 0%, rgba(29,29,28,1) 100%);
// background: rgb(49,50,51);
// background: radial-gradient(circle, rgba(49,50,51,1) 0%, rgba(1,12,25,1) 100%);
// background: rgb(0,5,11);
// background: radial-gradient(circle, rgba(0,5,11,1) 0%, rgba(49,50,51,1) 100%);
// const currentMode = useSelector(state => state.mode, (prev, next) => prev.mode === next.mode);

export const getGlobalStyles = (currentMode) =>
	currentMode.mode === ModeTypes.dark
		? ModeStyles.darkMode
		: ModeStyles.lightMode;
