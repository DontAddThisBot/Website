import styled from 'styled-components';
import Tutorial2 from '../../../img/Tutorial2.avif';

export const BottomImageHeaders = styled.section`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: row;
	height: 100%;
	width: 100%;
	max-width: 50%;
	max-height: 50%;
	background-color: #1a1a1a;
	margin-bottom: 3%;
	border-radius: 10px;
	box-shadow: 0 0 10px 0 white;
	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		border-radius: 20px;
	}
	@media (max-width: 768px) {
		width: 100%;
		height: 100%;
		max-width: 80%;
		max-height: 80%;
		margin-bottom: 4rem;
		background-color: transparent;
		box-shadow: none;
		border: none;
		img {
			width: 100%;
			height: 100%;
			border-radius: 10px;
			content: url(${Tutorial2});
			box-shadow: 0 0 10px 0 white;
		}
	}
`;
