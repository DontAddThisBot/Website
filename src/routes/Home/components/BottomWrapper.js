import styled from 'styled-components';
import Gradient from '../../../img/Gradient.png';

export const BottomWrapper = styled.section`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	background-image: url(${Gradient});
	background-size: cover;
	margin-top: 3.5rem;
	margin-bottom: 5rem;
	width: 100%;

	@media (max-width: 768px) {
		font-size: 1rem;
		width: 100%;
		margin-top: 2rem;
	}
`;
