import '../../App.css';
import { TAB_NAMES } from '../../AppConstants';
import Projects from './Projects';
import About from './About';
import { useSelector } from 'react-redux';
import ConnectFour from './ConnectFour';
import CleanCodePrinciples from './CleanCodePrinciples';

const Content = (currentTab = TAB_NAMES.ABOUT) => {
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
