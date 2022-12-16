import styled from 'styled-components';
import StvMAnimated from '../../../img/7tvM-Animated.gif';
import PoroAnimated from '../../../img/Poro-Animated.gif';

export const RowWrapper = styled.section`
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
	.stv,
	.poro {
		margin-right: 2rem;
		margin-left: 2rem;
		transition: all 0.2s ease-in-out;
		.bot-pfp {
			display: block;
			margin-left: auto;
			margin-right: auto;
			width: 85px;
			&.stv {
				box-shadow: 0 0 20px #29d9f7;
			}
			&.poro {
				box-shadow: 0 0 20px white;
			}
		}
		:hover {
			transform: scale(1.1);
		}
		&.stv:hover {
			box-shadow: 0 0 20px #29d9f7;
			img.stv {
				content: url(${StvMAnimated});
			}
		}
		&.poro:hover {
			box-shadow: 0 0 20px white;
			img.poro {
				content: url(${PoroAnimated});
			}
		}
		@media (max-width: 768px) {
			width: 60%;
		}
	}
`;
