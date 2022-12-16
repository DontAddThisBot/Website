import site from '../../config.json';

export async function botRoles() {
	const roles = await fetch(`${site.frontend.oldApi}/api/bot/info`, {
		method: 'GET',
	}).then((res) => res.json());

	return roles;
}
