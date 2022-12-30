import React from 'react';
import { Span } from '../components/Span';

const DiscordButton = () => {
	const discordLink = `https://discord.com/oauth2/authorize?client_id=1040646950330048652&scope=applications.commands%20bot&permissions=8`;
	return (
		<>
			<button className="discord-button" onClick={() => window.location.replace(discordLink)}>
				<Span>Discord</Span>
			</button>
		</>
	);
};

export default DiscordButton;
