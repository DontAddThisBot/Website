import site from '../../config.json';
import fetch from 'node-fetch';

export async function totalChannels() {
	const channelCount = await fetch(`${site.frontend.oldApi}/api/bot/channels`, {
		method: 'GET',
	}).then((res) => res.json());
	return channelCount;
}
