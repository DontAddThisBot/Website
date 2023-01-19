import React from 'react';

const FrontPageInfo = ({ totalChannelCount }) => {
	const { channelCount, totalPoros, executedCommands, seenUsers } = totalChannelCount;
	return (
		<div className="channel-count">
			Currently in {channelCount} Channels
			<p className="bot-info">Total {totalPoros} Poros farmed</p>
			<p className="bot-info">Total {executedCommands} commands executed</p>
			<p className="bot-info">Total {seenUsers} users seen</p>
			<p className="bot-info since">Since 2022-04-24</p>
		</div>
	);
};

export default FrontPageInfo;
