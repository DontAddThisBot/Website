import styled from 'styled-components';

export const BottomTextHeaders = styled.div`
	margin-top: 1rem;
	margin-bottom: 2rem;
	text-align: center;
	font-weight: 400;
	p {
		font-size: 1.5rem;
		font-weight: 200;
		margin-top: 1rem;
		color: lightgrey;
	}
	span {
		background-color: white;
		display: inline-block;
		width: 200px;
		height: 1px;
	}
	.bot-started-information {
		font-size: 50px;
		@media (max-width: 768px) {
			font-size: 30px;
		}
	}
`;
