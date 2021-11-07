import { Card } from 'react-bootstrap';
import styled from 'styled-components';
import { getGlobalStyles } from '../../../AppConstants';
import { useSelector } from 'react-redux';
import { CustomText } from '../../../App';

const CardContainer = styled.div`
	margin: 5rem 20rem 10rem 20rem;
	padding: auto;
	width: 50rem;
	align: center;
`;

const About = () => {
	const globalStyles = getGlobalStyles(useSelector((state) => state.mode));
	return (
		<>
			<CardContainer>
				<Card
					bg={globalStyles.card.bg ?? 'light'}
					text={globalStyles.card.text ?? 'black'}
				>
					{/* <Card.Img variant="top" src="holder.js/100px180" /> */}
					<Card.Body>
						<Card.Text>
							<CustomText size='1rem' colour={globalStyles.textColour}>
								<p>
									Hello! I'm Faraaz Ahmed, a passionate software engineer with a
									history of working in banking industry.
								</p>
								<p>I focus on writing clean, elegant and efficient code.</p>
								<p>Experienced in building enterprise software applications.</p>
								<p>
									Learn the basics and the pillars of programming, and your code
									will be robust and will adapt to changes more quickly. Also,
									other programmers will be able to keep it without going crazy.
								</p>
								<p>
									{' '}
									I have good command in working with programming languages such
									as Java, JavaScript, TypeScript and Python.
								</p>
								<p>
									Experienced in building web applications through frameworks
									such as React, Angular and Spring Boot.
								</p>
							</CustomText>
						</Card.Text>
					</Card.Body>
				</Card>
			</CardContainer>
		</>
	);
};

export default About;
