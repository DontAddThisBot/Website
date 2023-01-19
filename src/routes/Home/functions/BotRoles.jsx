import React from 'react';

const BotRoles = ({ totalRoles, totalMods }) => {
	const { mods, vips } = totalRoles;
	const { follows, views } = totalMods;
	return (
		<>
			<div className="streamer-bot-info">Who is using DontAddThisBot?</div>
			<p>{mods?.toLocaleString() ?? ''} Total Modded Channels</p>
			<p className="vip-channel">{vips?.toLocaleString() ?? ''} Total VIP Channels</p>
			<p className="modded-follows">{follows?.toLocaleString() ?? ''} Total Modded Follows</p>
			<p className="modded-views">{views?.toLocaleString() ?? ''} Total Modded Views</p>
		</>
	);
};

export default BotRoles;
