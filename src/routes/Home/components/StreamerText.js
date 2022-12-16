import styled from 'styled-components';

export const StreamerText = styled.section`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin: 0 auto;
	width: 100%;
	height: 100%;
	color: #ffffff;
	font-size: 1.5rem;
	font-weight: 600;
	text-align: center;
	margin-bottom: 3rem;
	p {
		margin: 0 auto;
		color: grey;
	}
	p.vip-channel {
		font-size: 1.3rem;
	}
	p.modded-follows {
		font-size: 1rem;
	}
	p.modded-views {
		font-size: 0.9rem;
	}
	.streamer-bot-info {
		font-size: 50px;
		@media (max-width: 768px) {
			font-size: 30px;
		}
	}
`;
