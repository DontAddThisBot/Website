import styled from 'styled-components';

export const TopMainHeader = styled.div`
	color: inherit;
	font-size: inherit;
	text-decoration: none;
	font-weight: inherit;
	span {
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		-webkit-tap-highlight-color: transparent;

		&.multi {
			background-image: linear-gradient(45deg, #7a32eb 0%, #d7d4d6 100%);
		}

		&.utility {
			background-image: linear-gradient(45deg, #fa99ff 0%, #1971c2 100%);
		}
	}
`;
