import React, { useContext } from 'react';
import { Context } from '../../Context';
import styled from 'styled-components';
import useLiveTimer from './hooks/useLiveTimer';

import CodePage from './functions/CodePage';
import HandleModSubmit from './functions/HandleModSubmit';

const Code = () => {
	const { isLoggedIn: isUserLoggedIn, isLoading, isBotIn, setIsBotIn } = useContext(Context);
	const { remainingTime, poroData, didPoroLoad, todayCode } = useLiveTimer({ isUserLoggedIn });

	return (
		<OuterWrapper>
			<MakeABox>
				<CodePage
					isLoading={isLoading}
					didPoroLoad={didPoroLoad}
					isUserLoggedIn={isUserLoggedIn}
					todayCode={todayCode}
					isBotIn={isBotIn}
					setIsBotIn={setIsBotIn}
					poroData={poroData}
					remainingTime={remainingTime}
				/>
				<IsModerator>
					<HandleModSubmit />
				</IsModerator>
			</MakeABox>
		</OuterWrapper>
	);
};

const IsModerator = styled.div`
	color: grey;
	text-align: center;
	line-height: 0.8;

	.moderator-bot {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		margin-top: 1rem;

		.moderator-bot-input {
			width: 50%;
			padding: 0.5rem;
			border: 1px solid grey;
			border-radius: 0.5rem;
			margin-bottom: 0.5rem;
		}

		.moderator-bot-button {
			padding: 0.5rem;
			border: 1px solid grey;
			border-radius: 0.5rem;
			background-color: #1e1e1e;
			color: white;
			cursor: pointer;
		}
	}

	h2 {
		font-size: 1.2rem;
	}
`;

const MakeABox = styled.div`
	background-color: rgba(29, 31, 29, 0.5);
	border-radius: 10px;
	padding: 10px;
	margin: 10px;
	width: 50%;
	display: flex;
	flex-direction: column;
	align-items: center;
	overflow-wrap: break-word;
	box-shadow: 0 0 10px 0 rgba(145, 70, 255, 1);

	animation-name: slideFromLeft;
	animation-duration: 0.5s;

	@keyframes slideFromLeft {
		0% {
			transform: translateX(-2%);
		}
		100% {
			transform: translateX(0%);
		}
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}

	.top-info {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		width: 80%;
		margin-bottom: 10px;
		padding: 20px;

		@media (max-width: 768px) {
			flex-direction: column;
			align-items: center;
		}
	}

	.top-info-code {
		align-self: self-start;
		overflow-wrap: anywhere;
		float: right;

		h1 {
			font-size: 30px;
			text-align: -webkit-left;
			text-transform: uppercase;
		}

		h2 {
			text-align: -webkit-left;
			text-transform: uppercase;
		}
	}

	.top-info-code-2 {
		align-self: self-start;
		overflow-wrap: anywhere;
		float: right;
		color: grey;

		h1.daily-redeem {
			font-size: 30px;
			text-transform: uppercase;
			overflow-wrap: anywhere;
			contain: style;
		}

		h1 {
			font-size: 30px;
			text-align: -webkit-right;
			text-transform: uppercase;
		}

		h2 {
			text-align: -webkit-right;
			text-transform: uppercase;
		}
	}

	.top-info-code-3 {
		text-align: center;
	}

	div.add-bot-button {
		margin: 0 auto;
		margin-top: 2rem;
		margin-bottom: 2rem;
		font-size: 1.5rem;
		font-weight: bold;
		cursor: pointer;
		transition: all 0.2s ease-in-out;
	}

	.add-bot-button {
		button.join-button {
			color: white;
			background-color: transparent;
			border: 1px solid #30c759;

			:hover {
				background-color: #30c759;
				border: 1px solid #30c759;
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
	}

	@media (max-width: 768px) {
		width: 90%;
		gap: 1%;
		.top-info-code {
			align-self: stretch;
			align-items: center;
			font-size: 10px;
			line-height: 1;

			h1,
			h2 {
				text-align: center;
				align-items: center;
			}
		}

		.top-info-code-2 {
			align-self: stretch;
			align-items: center;
			line-height: 1;

			h1,
			h2,
			h1.daily-redeem {
				font-size: 20px;
				text-align: center;
				align-items: center;
			}
		}

		.top-info-code-3 {
			margin-top: 0%;
		}
	}
`;

const OuterWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	margin-top: 3%;

	div.un-authorized {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
`;

export default Code;
