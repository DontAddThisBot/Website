export async function fetchStreamers() {
	const streamers = ['forsen', 'velcuz', 'fapparamoar', 'michelleputtini', 'jujalag'];
	const data = await fetch(`https://api.ivr.fi/v2/twitch/user?login=${streamers.join('%2C')}`, {
		method: 'GET',
		headers: {
			'User-Agent': 'IF YOU SEE THIS VI VON ZULUL',
		},
	}).then((res) => res.json());
	const mapped = await data.map((streamer) => {
		const { displayName, logo, followers } = streamer;
		return {
			name: displayName,
			pfp: logo,
			status: 'Partner',
			followers: followers.toLocaleString(),
		};
	});
	return mapped;
}
