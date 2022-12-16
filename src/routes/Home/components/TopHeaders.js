import styled from 'styled-components';

export const TopHeaders = styled.section`
	display: flex;
	font-size: 3rem;
	margin-top: 3rem;
	text-align: center;
	allign-items: center;
	font-weight: bold;
	line-height: 60px;
	flex-direction: column;
	justify-content: center;

	div.div-button {
		margin: 0 auto;
		margin-top: 2rem;
		margin-bottom: 2rem;
		font-size: 1.5rem;
		font-weight: bold;
		cursor: pointer;
		transition: all 0.2s ease-in-out;
	}
	div.channel-count {
		font-size: 2rem;
		p.bot-info {
			font-size: 1rem;
			color: grey;
			line-height: 10px;
		}
		p.since {
			margin-top: 2rem;
			font-size: 1.5rem;
		}
	}

	button.join-button {
		color: white;
		background-color: transparent;
		border: 1px solid #30c759;

		:hover {
			background-color: #30c759;
			border: 1px solid #30c759;
		}
	}

	button.part-button {
		color: white;
		background-color: transparent;
		border: 1px solid #d1243e;

		:hover {
			background-color: #d1243e;
			border: 1px solid #d1243e;
		}
	}

	button {
		border: none;
		border-radius: 5px;
		padding: 15px 35px;
		color: white;
		font-weight: bold;
		cursor: pointer;
		border: 1px solid #9146ff;
		border-radius: 5px;
		background-color: #9146ff;
		transition: 0.3s;

		&:hover {
			background-color: transparent;
			border: 1.5px solid #9146ff;
			transform: scale(1.1);
		}
	}
`;
