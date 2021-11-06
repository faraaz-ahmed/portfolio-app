// import logo from './logo.svg';
import '../../App.css';
// import HomeNavBar from './components/navbar';
import styled from 'styled-components';
import store from '../../store/store';
import { ACTION_TYPE } from '../../store/actiontypes';
import { Tabs } from 'react-bootstrap';
import { TAB_NAMES } from '../../AppConstants';
import Projects from './Projects';
import Education from './Education';
import About from './About';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import ConnectFour from './ConnectFour';
import CleanCodePrinciples from './CleanCodePrinciples';

const Heading = styled.div`
	font-size: 2.5rem;
`;

const Subheading = styled.div`
	font-size: 0.8rem;
`;

const Paragraph = styled.div`
	align: center;
	font-size: 1rem;
`;

const Content = (currentTab = TAB_NAMES.ABOUT) => {
	// const currentTab = (useSelector(state => state.tab));
	currentTab = useSelector((state) => state.tab);
	console.log('currentTab', currentTab);
	const renderTabContent = () => {
		if (currentTab.tab === TAB_NAMES.PROJECTS) {
			return <Projects />;
		} else if (currentTab.tab === TAB_NAMES.CLEAN_CODE_GUIDE) {
			return <CleanCodePrinciples />;
		} else if (currentTab.tab === TAB_NAMES.CONNECTFOUR) {
			return <ConnectFour />;
		} else if (currentTab.tab === TAB_NAMES.EDUCATION) {
			return <ConnectFour />;
		} else {
			return <About />;
		}
	};
	return <>{renderTabContent()}</>;
};

export default Content;
