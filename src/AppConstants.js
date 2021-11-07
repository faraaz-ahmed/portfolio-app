import darkBackground from './assets/images/blue-background-shade.png';
import lightBackground from './assets/images/cucumber-background-shade.png';

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

export const getGlobalStyles = (currentMode) =>
	currentMode.mode === ModeTypes.dark
		? ModeStyles.darkMode
		: ModeStyles.lightMode;
