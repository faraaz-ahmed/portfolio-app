import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { getGlobalStyles, TAB_NAMES } from '../../AppConstants';
import { updateTabs } from '../../store/actions/TabsAction';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import ModeSwitcher from '../ModeSwitcher';

const NavHeading = styled.div``;

const HomeNavbar = () => {
	const dispatch = useDispatch();

	const globalStyles = getGlobalStyles(useSelector((state) => state.mode));

	const dispatchOnTabClick = (tab, e) => {
		console.log('tab dispatch', tab);
		dispatch(updateTabs(tab));
		e.preventDefault();
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
							Faraaz Ahmed
						</NavHeading>
					</Navbar.Brand>
					<Navbar.Toggle aria-controls='basic-navbar-nav' />
					<Navbar.Collapse id='basic-navbar-nav'>
						<Nav className='me-auto'>
							<Nav.Link href='#link'>
								<NavHeading
									onClick={(e) => dispatchOnTabClick(TAB_NAMES.PROJECTS, e)}
								>
									Projects
								</NavHeading>
							</Nav.Link>
							<Nav.Link href='#link2'>
								<NavHeading
									onClick={(e) =>
										dispatchOnTabClick(TAB_NAMES.CLEAN_CODE_GUIDE, e)
									}
								>
									Clean Code Guide
								</NavHeading>
							</Nav.Link>
							<Nav.Link href='#link3'>
								<NavHeading
									onClick={(e) => dispatchOnTabClick(TAB_NAMES.CONNECTFOUR, e)}
								>
									Tic Tac Toe
								</NavHeading>
							</Nav.Link>
						</Nav>
					</Navbar.Collapse>
					<Navbar.Collapse className='justify-content-end'>
						<ModeSwitcher />
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</>
	);
};

export default HomeNavbar;
