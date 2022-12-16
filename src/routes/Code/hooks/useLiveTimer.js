import { useState, useEffect } from 'react';

const useLiveTimer = ({ isUserLoggedIn }) => {
	const { success, id } = isUserLoggedIn;

	const [remainingTime, setRemainingTime] = useState(0);
	const [poroData, setPoro] = useState([]);
	const [todayCode, setTodayCode] = useState('');
	const [didPoroLoad, setDidPoroLoad] = useState(false);

	useEffect(() => {
		const interval = setInterval(() => {
			setRemainingTime((remainingTime) => remainingTime - 1000);
		}, 1000);

		return () => clearInterval(interval);
	}, [remainingTime]);

	useEffect(() => {
		if (success) {
			import('../../../js/api/getPoroInfo').then(({ poroInfo }) => {
				const { login } = id.data[0];
				poroInfo(login).then((res) => {
					if (res.success) {
						setPoro(res);
						if (res.cooldowns?.poroRedeem.isAvailable === false) {
							const timeLeft = new Date(res.cooldowns?.poroRedeem.lastUsage).getTime() - new Date().getTime() + 1000 * 60 * 60 * 24;
							setRemainingTime(timeLeft);
						}
					} else {
						setPoro(res);
					}
					setDidPoroLoad(true);
				});
				import('../../../js/api/totalChannels').then(({ totalChannels }) => {
					totalChannels().then(({ todaysCode }) => setTodayCode(todaysCode));
				});
			});
		}
	}, [success]);

	return { remainingTime, poroData, didPoroLoad, todayCode };
};

export default useLiveTimer;
