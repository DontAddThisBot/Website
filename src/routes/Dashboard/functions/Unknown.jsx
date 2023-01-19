import React from 'react';
import styled from 'styled-components';
import PoroDespair from '../../../img/poroDespair.avif';

const Unkonwn = ({ h1 }) => {
	return (
		<UnkonwnDiv>
			<h1>{h1}</h1>
			<img src={PoroDespair} alt="poro" />
		</UnkonwnDiv>
	);
};

const UnkonwnDiv = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;

	h1 {
		font-size: 2rem;
		color: #fff;
		font-family: monospace;
	}

	img {
		opacity: 0.6;
	}
`;

export default Unkonwn;
