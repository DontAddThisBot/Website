import styled from 'styled-components';

export const BottomImageSliderButtons = styled.ul`
	display: flex;
	justify-content: center;
	flex-direction: row;
	margin: 10px 0;
	padding: 0;
	text-align: center;
	width: 100%;
	z-index: 1;

	button {
		background-color: #1e1e1e;
		border: 2px solid #fff;
		cursor: pointer;
		height: 15px;
		margin: 0 5px;
		outline: none;
		width: 10px;
		border-radius: 50%;
		transition: 0.3s ease-in-out;
	}
`;
