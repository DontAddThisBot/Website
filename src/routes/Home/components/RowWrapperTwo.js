import styled from 'styled-components';
import peepooChatAnimated from '../../../img/peepoChat-Animated.gif';
import StatsAnimated from '../../../img/Stats-Animated.gif';

export const RowWrapperTwo = styled.section`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: row;
	transition: all 0.2s ease-in-out;
	grid-template-columns: repeat(2, 1fr);
	grid-template-rows: repeat(2, 1fr);
	grid-gap: 1rem;
	grid-auto-flow: dense;
	grid-auto-columns: 1fr;
	grid-auto-rows: 1fr;
	max-width: 800px;
	margin: 0 auto;

	@media (max-width: 768px) {
		flex-direction: column;
	}

	.utility,
	.stats {
		margin-right: 2rem;
		margin-left: 2rem;
		transition: all 0.2s ease-in-out;
		.bot-pfp {
			display: block;
			margin-left: auto;
			margin-right: auto;
			width: 85px;
			&.utility {
				box-shadow: 0 0 20px #9bd02a;
			}
			&.stats {
				box-shadow: 0 0 20px #74f593;
			}
		}
		:hover {
			transform: scale(1.1);
		}
		&.utility:hover {
			box-shadow: 0 0 20px #9bd02a;
			img.utility {
				content: url(${peepooChatAnimated});
			}
		}
		&.stats:hover {
			box-shadow: 0 0 20px #74f593;
			img.stats {
				content: url(${StatsAnimated});
			}
		}

		@media (max-width: 768px) {
			width: 60%;
		}
	}
`;
