import styled from 'styled-components';

export const StreamerBox = styled.section`
	display: flex;
	align-items: center;
	justify-content: center;
	max-width: 90%;
	border-radius: 10px;
	padding: 10px;
	box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.5);
	transition: 0.3s;
	cursor: pointer;
	border: 2px solid grey;
	background-color: transparent;
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

	button {
		background-color: transparent;
		border: none;
		color: white;
		font-size: 1.5rem;
		font-weight: 600;
		cursor: pointer;
		transition: 0.3s;
		margin: 0 1rem;
		outline: none;
		border-radius: 50%;
		border: 2px solid grey;
		width: 50px;
		height: 50px;

		&:hover {
			border-radius: 50%;
			color: #000000;
			background-color: lightgrey;
			opacity: 0.4;
			transform: scale(1.1);
		}

		&:active {
			border-radius: 50%;
			color: #000000;
			background-color: transparent;
			transform: scale(0.7);
		}

		span {
			font-size: 1.8rem;
		}

		@media (max-width: 768px) {
			width: 40px;
			height: 40px;
			span {
				font-size: 1.3rem;
			}

			&.right {
				margin-top: 15px;
			}
		}
	}

	img {
		width: 150px;
		height: 150px;
		border-radius: 50%;
		margin: 10px;
		box-shadow: 0 0 10px 0 lightgrey;
		margin-right: 4rem;

		@media (max-width: 768px) {
			width: 100px;
			height: 100px;
			margin-top: 1.5rem;
			margin-right: 0.5rem;
		}
	}

	.streamer-information {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		color: white;
		width: 400px;
		max-width: 90%;
		transition: 0.3s;

		.streamer-information-text {
			display: flex;
			flex-direction: column;
			align-items: center;
		}

		.streamer-username {
			font-size: 200%;
			font-weight: 600;
			margin-bottom: 0.2rem;
		}

		.streamer-status {
			font-size: 150%;
			font-weight: 600;
			margin-top: -3%;
			color: #9146ff;
		}

		.streamer-followers {
			font-size: 150%;
			font-weight: 600;
			color: grey;
			margin-top: -2%;
			margin-bottom: 5px;
		}

		@media (max-width: 768px) {
			flex-direction: column;

			.streamer-username {
				margin-top: 0.3rem;
			}

			.streamer-status {
				margin-bottom: 0.3rem;
			}
		}
	}

	@media (max-width: 768px) {
		flex-direction: column;
		width: 80%;
	}
`;
