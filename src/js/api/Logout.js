import site from '../../config.json';
import fetch from 'node-fetch';

export async function Logout() {
	const LogOut = await fetch(`${site.frontend.oldApi}/logout`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${localStorage.getItem('SITE_TOKEN')}`,
		},
	}).then((res) => res.json());
	if (LogOut.success) {
		localStorage.removeItem('SITE_TOKEN');
	}
}
