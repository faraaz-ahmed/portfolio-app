// import logo from './logo.svg';
// import './App.css';
// import HomeNavBar from './components/navbar';
import styled from 'styled-components';
// import { getGlobalStyles } from '../../AppConstants';
import { useSelector } from 'react-redux';
import { CustomText } from '../../../App';
import { getGlobalStyles } from '../../../AppConstants';
import { Button, Card } from 'react-bootstrap';
import { FlexRowContainer } from '../CustomCss';
import { changeProjectIndex } from '../../../store/actions/CardIndexAction';
import { useDispatch } from 'react-redux';
import { TEMPLATE_CONSTANTS } from '../../../TemplateConstants';
// import { TEMPLATE_CONSTANTS } from '../../../TemplateConstants';

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

const CardContainer = styled.div`
	margin: 5rem 20rem 10rem 20rem;
	padding: auto;
	width: 50rem;
	align: center;
`;

const CustomProjectCard = ({ project = {} }) => {
	const {
		title = '',
		techStack = '',
		description = '',
		githubLink = '',
	} = project;
	const dispatch = useDispatch();
	const projects = TEMPLATE_CONSTANTS.PROJECTS;
	const globalStyles = getGlobalStyles(useSelector((state) => state.mode));
	const { projectIndex } = useSelector((state) => state.cardIndex);

	const onClickNext = () => {
		dispatch(changeProjectIndex((projectIndex + 1) % projects.length));
	};
	const onClickPrevious = () => {
		dispatch(
			changeProjectIndex(
				(projectIndex === 0 ? projects.length - 1 : projectIndex - 1) %
					projects.length
			)
		);
	};

	const dispatchOnTabClick = (projectIndex, e) => {
		// console.log('tab dispatch', tab);
		dispatch(changeProjectIndex(projectIndex));
		e.preventDefault();
		// currentTab = useSelector(state => state.tab);
	};
	return (
		<>
			<CardContainer>
				<FlexRowContainer>
					<Button
						variant={globalStyles.button.variant}
						onClick={onClickPrevious}
					>
						<CustomText size='1.5rem' colour={'#808080'}>
							{'<<'}
						</CustomText>
					</Button>
					<Card
						bg={globalStyles.card.bg ?? 'light'}
						text={globalStyles.card.text ?? 'black'}
					>
						<Card.Body>
							<Card.Text>
								<CustomText size='1.5rem' colour={globalStyles.textColour}>
									{title}
								</CustomText>
							</Card.Text>
							<Card.Text>
								<CustomText size='1rem' colour={globalStyles.textColour}>
									Description: {description}
								</CustomText>
							</Card.Text>
							<Card.Text>
								<CustomText size='1rem' colour={globalStyles.textColour}>
									Tech Stack: {techStack}
								</CustomText>
							</Card.Text>
							<Card.Text>
								<CustomText size='1rem' colour={globalStyles.textColour}>
									Github Link: <a>{githubLink}</a>
								</CustomText>
							</Card.Text>
							<Card.Text>
								<CustomText size='0.7rem' colour={'#808080'}>
									page: {`${projectIndex + 1}/${projects.length}`}
								</CustomText>
							</Card.Text>
							{/* <Button variant="primary">Go somewhere</Button> */}
						</Card.Body>
					</Card>
					<Button variant={globalStyles.button.variant} onClick={onClickNext}>
						<CustomText size='1.5rem' colour={'#808080'}>
							{'>>'}
						</CustomText>
					</Button>
				</FlexRowContainer>
			</CardContainer>
		</>
	);
};

export default CustomProjectCard;
