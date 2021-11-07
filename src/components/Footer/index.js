import styled from 'styled-components';
import linkedInIcon from '../../assets/images/icons8-linkedin.svg';
import githubIcon from '../../assets/images/icons8-github.svg';
import twitterIcon from '../../assets/images/icons8-twitter.svg';

const FooterContainer = styled.div`
	margin: 1rem;
	display: flex;
	flex-direction: row;
	position: absolute;
	bottom: 1rem;
	gap: 0.325rem;
`;

const ImageContainer = styled.div`
	scale: 7%;
	max-height: 7%;
	max-width: 7%;
`;

const Footer = () => {
	return (
		<>
			<FooterContainer>
				<a
					href='https://twitter.com/faraaz_ahmed_'
					target='_blank'
					rel='noreferrer'
				>
					<img src={twitterIcon} alt='' />
				</a>
				<br></br>
				<a
					href='https://www.linkedin.com/in/faraaz-ahmed-286a75141/'
					target='_blank'
					rel='noreferrer'
				>
					<ImageContainer>
						<img src={linkedInIcon} alt='' />
					</ImageContainer>
				</a>
				<br></br>
				<a
					href='https://github.com/faraaz-ahmed/'
					target='_blank'
					rel='noreferrer'
				>
					<ImageContainer>
						<img src={githubIcon} alt='' />
					</ImageContainer>
				</a>
			</FooterContainer>
		</>
	);
};

export default Footer;
