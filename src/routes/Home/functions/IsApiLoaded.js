import React from 'react';
import { LoginButton } from '../../../js/api/LoginButton';
import { Span } from '../components/Span';
import JoinButton from './JoinButton';
import PartButton from './PartButton';

const HandleFlow = ({ isLoading, loginFlow, channelBot, setBotState }) => {
	const { success: isChannelSuccess, isChannel: isBotInChannel } = channelBot;
	const { success, id } = loginFlow;

	if (!isLoading || !channelBot || !loginFlow) {
		return <div className="loading">Loading...</div>;
	} else {
		if (!success) {
			return (
				<LoginButton>
					<button className="login-button">
						<Span>Login with Twitch</Span>
					</button>
				</LoginButton>
			);
		}

		if (success && isChannelSuccess) {
			if (!isBotInChannel) {
				return <JoinButton loginFlow={loginFlow} callback={setBotState} />;
			} else {
				return <PartButton loginFlow={loginFlow} callback={setBotState} />;
			}
		}
	}
};

export default HandleFlow;
