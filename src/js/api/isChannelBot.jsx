import site from '../../config.json';

export async function isChannelBot(channelName) {
	let isChannelBot = await fetch(`${site.frontend.oldApi}/api/bot/channel/${channelName}`, {
		method: 'GET',
	}).then((res) => res.json());
	const channelPfp = await fetch(`https://api.ivr.fi/v2/twitch/user?login=${channelName}`, {
		method: 'GET',
	}).then((res) => res.json());
	if (!channelPfp || channelPfp.length === 0 || channelPfp[0]?.banned || !channelPfp[0]?.logo) return isChannelBot;
	isChannelBot.pfp = channelPfp[0].logo;
	return isChannelBot;
}
