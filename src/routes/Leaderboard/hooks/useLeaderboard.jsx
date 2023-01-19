import { useState, useEffect } from 'react';
import { fetchLeaderboard } from '../../../js/api/fetchLeaderboard';
import { fetchPfp } from '../../../js/api/fetchPfp';

const useLeaderboard = () => {
	const [leaderboard, setLeaderboard] = useState([]);
	const [profilePic, setProfilePic] = useState([]);
	const [data, setData] = useState(null);

	useEffect(() => {
		fetchLeaderboard(false).then((topUsers) => {
			setLeaderboard(topUsers);

			let names = [];
			topUsers.map((user) => {
				names.push(user.username);
				return null;
			});

			fetchPfp(names).then((data) => {
				let pfps = [];
				data.forEach((user) => pfps.push(user.logo));
				setProfilePic(pfps);
				setData(true);
			});
		});
	}, []);

	leaderboard.forEach((user, index) => {
		if (user.username) {
			user.pfp = profilePic[index];
		}
	});

	return { leaderboard, data, setLeaderboard, setProfilePic, setData };
};

export default useLeaderboard;
