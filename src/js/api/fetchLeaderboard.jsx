import site from '../../config.json';

export async function fetchLeaderboard(boolean) {
	const { topUsers } = await fetch(`${site.frontend.oldApi}/api/bot/leaderboard${boolean ? `?type=lowest` : ''}`, {
		method: 'GET',
	}).then((res) => res.json());
	return topUsers;
}
