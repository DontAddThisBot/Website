import { fetchLeaderboard } from '../../../js/api/fetchLeaderboard';
import { fetchPfp } from '../../../js/api/fetchPfp';

const SortLeaderboard = ({ isLowest, setData, setLeaderboard, setProfilePic }) => {
	function sortLowest(Boolean) {
		setData(null);
		fetchLeaderboard(Boolean).then((topUsers) => {
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
	}

	return (
		<li
			onClick={() => {
				sortLowest(isLowest);
			}}
		>
			{isLowest ? 'Lowest' : 'Highest'}
		</li>
	);
};

export default SortLeaderboard;
