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
import { changeCleanCodeIndex } from '../../../store/actions/CardIndexAction';
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

const CustomCleanCodeCard = ({ cleanCodeSection = {} }) => {
	const { title = '', description = [] } = cleanCodeSection;
	const dispatch = useDispatch();
	const globalStyles = getGlobalStyles(useSelector((state) => state.mode));
	const { cleanCodeIndex } = useSelector((state) => state.cardIndex);
	const cleanCodeSections = TEMPLATE_CONSTANTS.CLEANCODE.SECTIONS;

	const renderBulletPoints = () => {
		return (
			<>
				{description.map((point) => (
					<Card.Text>
						<CustomText size='1rem' colour={globalStyles.textColour}>
							{point}
						</CustomText>
					</Card.Text>
				))}
			</>
		);
	};

	const onClickNext = () => {
		dispatch(
			changeCleanCodeIndex((cleanCodeIndex + 1) % cleanCodeSections.length)
		);
	};
	const onClickPrevious = () => {
		dispatch(
			changeCleanCodeIndex(
				(cleanCodeIndex === 0
					? cleanCodeSections.length - 1
					: cleanCodeIndex - 1) % cleanCodeSections.length
			)
		);
	};

	const dispatchOnTabClick = (cleanCodeIndex, e) => {
		// console.log('tab dispatch', tab);
		dispatch(changeCleanCodeIndex(cleanCodeIndex));
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
							{renderBulletPoints()}
							<Card.Text>
								<CustomText size='0.7rem' colour={'#808080'}>
									page: {`${cleanCodeIndex + 1}/${cleanCodeSections.length}`}
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

export default CustomCleanCodeCard;
