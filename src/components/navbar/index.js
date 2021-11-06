import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { getGlobalStyles, Profile, TAB_NAMES } from '../../AppConstants';
import { updateTabs } from '../../store/actions/TabsAction';
import store from '../../store/store';
import { useDispatch, useSelector } from 'react-redux';
import Content from '../Content';
import styled from 'styled-components';
import ModeSwitcher from '../ModeSwitcher';
import { CustomText } from '../../App';
// import { Nav, Navbar, Container, NavDropdown } from "react-bootstrap";

const NavHeading = styled.div``;

const HomeNavbar = () => {
	const dispatch = useDispatch();
	const currentTab = TAB_NAMES.ABOUT;

	const globalStyles = getGlobalStyles(
		useSelector(
			(state) => state.mode
			// (prev, next) => prev.mode === next.mode
		)
	);

	const dispatchOnTabClick = (tab, e) => {
		console.log('tab dispatch', tab);
		dispatch(updateTabs(tab));
		e.preventDefault();
		// currentTab = useSelector(state => state.tab);
	};

	return (
		<>
			<Navbar
				bg={globalStyles.navBar.bg ?? 'light'}
				variant={globalStyles.navBar.variant ?? 'light'}
			>
				<Container>
					<Navbar.Brand href='#home'>
						<NavHeading onClick={(e) => dispatchOnTabClick(TAB_NAMES.ABOUT, e)}>
							{/* <CustomText size='1rem' colour={globalStyles.textColour}> */}
							Faraaz Ahmed
							{/* </CustomText> */}
						</NavHeading>
					</Navbar.Brand>
					<Navbar.Toggle aria-controls='basic-navbar-nav' />
					<Navbar.Collapse id='basic-navbar-nav'>
						<Nav className='me-auto'>
							{/* <Nav.Link href="#home1">About</Nav.Link> */}
							<Nav.Link href='#link'>
								<NavHeading
									onClick={(e) => dispatchOnTabClick(TAB_NAMES.PROJECTS, e)}
								>
									{/* <CustomText size='1rem' colour={globalStyles.textColour}> */}
									Projects
									{/* </CustomText> */}
								</NavHeading>
							</Nav.Link>
							<Nav.Link href='#link2'>
								<NavHeading
									onClick={(e) =>
										dispatchOnTabClick(TAB_NAMES.CLEAN_CODE_GUIDE, e)
									}
								>
									{/* <CustomText size='1rem' colour={globalStyles.textColour}> */}
									Clean Code Guide
									{/* </CustomText> */}
								</NavHeading>
							</Nav.Link>
							<Nav.Link href='#link3'>
								<NavHeading
									onClick={(e) => dispatchOnTabClick(TAB_NAMES.CONNECTFOUR, e)}
								>
									{/* <CustomText size='1rem' colour={globalStyles.textColour}> */}
									Tic Tac Toe
									{/* </CustomText> */}
								</NavHeading>
							</Nav.Link>
							{/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">About</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Projects</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Education</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
          </NavDropdown> */}
						</Nav>
					</Navbar.Collapse>
					<Navbar.Collapse className='justify-content-end'>
						<ModeSwitcher />
					</Navbar.Collapse>
					{/* <input type="image" src={} /> */}
				</Container>
			</Navbar>

			{/* <header className="App-header">
    <Content currentTab={currentTab}/>
  </header> */}
		</>
	);
};

export default HomeNavbar;
