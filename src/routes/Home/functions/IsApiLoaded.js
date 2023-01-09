import React from 'react';
import { LoginButton } from '../../../js/api/LoginButton';
import { Span } from '../components/Span';
import JoinButton from './JoinButton';
import PartButton from './PartButton';
import LearnMoreButton from './LearnMoreButton';
import DiscordButton from './DiscordAdd';

const HandleFlow = ({ isLoading, loginFlow, channelBot, setBotState }) => {
	const { success: isChannelSuccess, isChannel: isBotInChannel } = channelBot;
	const token = localStorage.getItem('SITE_TOKEN');

	if (!isLoading) {
		return <div className="loading">Loading...</div>;
	}

	if (!token || !loginFlow.success) {
		return (
			<>
				<LoginButton>
					<button className="login-button">
						<Span>Login with Twitch</Span>
					</button>
				</LoginButton>
				<LearnMoreButton />
			</>
		);
	}

	if (isChannelSuccess === undefined) {
		return <div className="loading">Loading...</div>;
	}

	if (!isBotInChannel || !isChannelSuccess) {
		return (
			<>
				<JoinButton loginFlow={loginFlow} callback={setBotState} />
				<LearnMoreButton />
				<DiscordButton />
			</>
		);
	} else {
		return (
			<>
				<PartButton loginFlow={loginFlow} callback={setBotState} />
				<DiscordButton />
			</>
		);
	}
};

export default HandleFlow;
