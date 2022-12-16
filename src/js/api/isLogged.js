import site from '../../config.json';

export async function isLogged() {
	const isLogged = await fetch(`${site.frontend.oldApi}/api/twitch`, {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${localStorage.getItem('SITE_TOKEN')}`,
		},
	}).then((res) => res.json());
	return isLogged;
}
