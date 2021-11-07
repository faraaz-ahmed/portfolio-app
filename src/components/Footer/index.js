import styled from 'styled-components';

const FooterContainer = styled.div`
	position: absolute;
	bottom: 1rem;
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
					<img
						src='https://img.icons8.com/fluent/30/000000/twitter.png'
						alt=''
					/>
				</a>
			</FooterContainer>
		</>
	);
};

export default Footer;
